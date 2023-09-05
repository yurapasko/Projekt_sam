const enterText = document.querySelector('.registration');
const formContainer = document.querySelector('Form');
const crossImage = document.querySelector('.cross');


// Додаємо обробник подій для закриття блоку при кліку на зображення
crossImage.addEventListener('click', () => {
    formContainer.style.display = 'none';
});

// Додаємо обробник подій для відкриття блоку при кліку на текст
enterText.addEventListener('click', () => {
    formContainer.style.display = 'block';
});

