document.getElementById('generateBtn').addEventListener('click', generateRandomNumber);

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const randomNumberElement = document.getElementById('randomNumber');
  randomNumberElement.textContent = `Random Number: ${randomNumber}`;
}