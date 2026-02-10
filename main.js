const generateButton = document.getElementById('generate-button');
const numbersContainer = document.getElementById('numbers-container');

const generateNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 5) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
};

const displayNumbers = (numbers) => {
    numbersContainer.innerHTML = '';
    for (const number of numbers) {
        const ball = document.createElement('div');
        ball.classList.add('number-ball');
        ball.textContent = number;
        ball.style.backgroundColor = getRandomColor();
        numbersContainer.appendChild(ball);
    }
};

const getRandomColor = () => {
    const colors = [
        '#e74c3c',
        '#8e44ad',
        '#3498db',
        '#e67e22',
        '#2ecc71',
        '#f1c40f',
        '#1abc9c',
        '#d35400',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

generateButton.addEventListener('click', () => {
    const newNumbers = generateNumbers();
    displayNumbers(newNumbers);
});

// Initial generation
const initialNumbers = generateNumbers();
displayNumbers(initialNumbers);