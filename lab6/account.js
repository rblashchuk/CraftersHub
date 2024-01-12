let registrationSuccessful = false;

function register() {
    registrationSuccessful = true;

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const nickname = document.getElementById('nickname').value;
    const avatar = document.getElementById('avatar').value;

    const user = {
        firstName: firstName,
        lastName: lastName,
        nickname: nickname,
        avatar: avatar
    };

    saveToLocalStorage('user', user);

    addImageRow();

    document.getElementById('registrationForm').style.display = 'none';

    const welcomeBlock = document.getElementById('welcomeBlock');
    welcomeBlock.style.display = 'block';

    welcomeBlock.innerHTML = `<h2>Добро пожаловать, ${firstName} (${nickname}) ${lastName}!</h2>`;

    document.getElementById('registrationForm').reset();
}

function addImageRow() {
    if (!registrationSuccessful) {
        return;
    }

    const userWall = document.getElementById('userWall');
    userWall.innerHTML = '';

    const imageRow = document.createElement('div');
    imageRow.className = 'image-row';

    const savedUser = getFromLocalStorage('user');

    const imageDescriptions = getFromLocalStorage('imageDescriptions') || [];

    for (const description of imageDescriptions) {
        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'image-description';
        descriptionElement.textContent = description;

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        imageContainer.appendChild(descriptionElement);

        imageRow.appendChild(imageContainer);
    }

    const addContentContainer = document.createElement('div');
    addContentContainer.className = 'add-content-container';

    const addButton = document.createElement('button');
    addButton.textContent = 'Добавить контент';

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';

    addButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        handleImageUpload(fileInput);
        fileInput.value = '';
    });

    addContentContainer.appendChild(addButton);
    imageRow.appendChild(addContentContainer);
    userWall.appendChild(imageRow);
}

function handleImageUpload(input) {
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageUrl = e.target.result;

            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;

            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            imageContainer.appendChild(imageElement);

            const userWall = document.getElementById('userWall');
            const imageRow = userWall.querySelector('.image-row');
            imageRow.appendChild(imageContainer);

            const description = prompt('Введите описание изображения:');

            if (description !== null) {
                const descriptionElement = document.createElement('p');
                descriptionElement.className = 'image-description';
                descriptionElement.textContent = description;

                imageContainer.appendChild(descriptionElement);

                // Добавляем описание в массив и сохраняем в localStorage
                const imageDescriptions = getFromLocalStorage('imageDescriptions') || [];
                imageDescriptions.push(description);
                saveToLocalStorage('imageDescriptions', imageDescriptions);
            }
        };

        reader.readAsDataURL(file);
    }
}

function saveToLocalStorage(key, data) {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function getFromLocalStorage(key) {
    try {
        const serializedData = localStorage.getItem(key);
        return JSON.parse(serializedData);
    } catch (error) {
        console.error('Error getting from localStorage:', error);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', addImageRow);
