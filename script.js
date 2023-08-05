const convertButton = document.getElementById('convertButton');
const resetButton = document.getElementById('resetButton');
const converterInput = document.getElementById('converter');
const resultOutput = document.querySelector('.result');

convertButton.addEventListener('click', () => {
    const celsius = parseFloat(converterInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = celsius * 9 / 5 + 32;
        resultOutput.textContent = `${celsius}°C is approximately ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultOutput.textContent = 'Invalid input. Please enter a valid number.';
    }
});

resetButton.addEventListener('click', () => {
    converterInput.value = '';
    resultOutput.textContent = '';
});
