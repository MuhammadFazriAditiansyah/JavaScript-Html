const imageSelect = document.getElementById('image-select');
        const opacitySelect = document.getElementById('opacity-select');
        const images = document.querySelectorAll('img');

        function updateImageAndOpacity() {
            // menyembunyikan semua foto
            images.forEach(image => image.style.display = 'none');

            // memilih foto
            const selectedImage = document.getElementById(imageSelect.value);
            selectedImage.style.display = 'block';

            // memilih opacity
            selectedImage.style.opacity = opacitySelect.value;
        }

        imageSelect.addEventListener('change', updateImageAndOpacity);
        opacitySelect.addEventListener('change', updateImageAndOpacity);