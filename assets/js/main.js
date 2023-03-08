function loadImage() {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            const image = new Image();
            image.src = content;

            image.onload = function () {
                const button = document.querySelector('button');
                const container = button.parentNode;
                container.insertBefore(image, button);
                button.remove();
                image.classList.add('img-fluid');
                image.style.maxWidth = '100%';
                image.style.maxHeight = '80vh'; // Regolala in base alle tue esigenze
            };

        };
    };

    input.click();
}
