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
                image.id = 'image-preview'; // Imposta l'ID dell'elemento immagine

                const brightnessRange = document.getElementById("brightness-range");
                const contrastRange = document.getElementById("contrast-range");
                const saturationRange = document.getElementById("saturation-range");
                const blurRange = document.getElementById("blur-range");
                const grayscaleCheckbox = document.getElementById("grayscale-checkbox");
                const sepiaCheckbox = document.getElementById("sepia-checkbox");
                const invertCheckbox = document.getElementById("invert-checkbox");
                const hueRange = document.getElementById("hue-range");
                const imagePreview = document.getElementById("image-preview");

                brightnessRange.addEventListener("input", applyFilters);
                contrastRange.addEventListener("input", applyFilters);
                saturationRange.addEventListener("input", applyFilters);
                blurRange.addEventListener("input", applyFilters);
                grayscaleCheckbox.addEventListener("change", applyFilters);
                sepiaCheckbox.addEventListener("change", applyFilters);
                invertCheckbox.addEventListener("change", applyFilters);
                hueRange.addEventListener("input", applyFilters);

                function applyFilters() {
                    console.log('Sto applicando')
                    imagePreview.style.filter = `
                    brightness(${brightnessRange.value}%)
                    contrast(${contrastRange.value}%)
                    saturate(${saturationRange.value}%)
                    blur(${blurRange.value}px)
                    grayscale(${grayscaleCheckbox.checked ? 1 : 0})
                    sepia(${sepiaCheckbox.checked ? 1 : 0})
                    invert(${invertCheckbox.checked ? 1 : 0})
                    hue-rotate(${hueRange.value}deg)
                  `;
                }

            };

        };
    };

    input.click();
}

function resetFilters() {

    const brightnessRange = document.getElementById("brightness-range");
    const contrastRange = document.getElementById("contrast-range");
    const saturationRange = document.getElementById("saturation-range");
    const blurRange = document.getElementById("blur-range");
    const grayscaleCheckbox = document.getElementById("grayscale-checkbox");
    const sepiaCheckbox = document.getElementById("sepia-checkbox");
    const invertCheckbox = document.getElementById("invert-checkbox");
    const hueRange = document.getElementById("hue-range");
    const imagePreview = document.getElementById("image-preview");

    // reimposta i valori dei filtri al loro stato predefinito
    brightnessRange.value = 100;
    contrastRange.value = 100;
    saturationRange.value = 100;
    blurRange.value = 0;
    hueRange.value = 0;
    grayscaleCheckbox.checked = false;
    invertCheckbox.checked = false;
    sepiaCheckbox.checked = false;

    // reimposta l'immagine all'originale
    imagePreview.style.filter = 'none';
}

const resetFiltersButton = document.getElementById('resetFiltersButton');
resetFiltersButton.addEventListener('click', resetFilters);




