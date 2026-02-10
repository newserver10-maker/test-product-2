const generateButton = document.getElementById('generate-button');
const numbersContainer = document.getElementById('numbers-container');

const generateNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 5) { // 5 numbers per combination
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
};

const displayCombinations = (combinations) => {
    numbersContainer.innerHTML = ''; // Clear previous combinations
    combinations.forEach(combination => {
        const combinationDiv = document.createElement('div');
        combinationDiv.classList.add('number-combination'); // Add a class for styling
        combination.forEach(number => {
            const ball = document.createElement('div');
            ball.classList.add('number-ball');
            ball.textContent = number;
            ball.style.backgroundColor = getRandomColor();
            combinationDiv.appendChild(ball);
        });
        numbersContainer.appendChild(combinationDiv);
    });
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
    const allCombinations = [];
    for (let i = 0; i < 5; i++) { // Generate 5 combinations
        allCombinations.push(generateNumbers());
    }
    displayCombinations(allCombinations);
});

// Initial generation
const initialAllCombinations = [];
for (let i = 0; i < 5; i++) { // Generate 5 combinations initially
    initialAllCombinations.push(generateNumbers());
}
displayCombinations(initialAllCombinations);