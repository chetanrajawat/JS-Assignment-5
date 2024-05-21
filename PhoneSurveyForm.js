document.getElementById('surveyForm').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const ageInput = document.getElementById('q_age');
  const ownsPhoneInput = document.getElementById('q_owns_phone');
  const errorsHolder = document.getElementById('errors-holder');
  const resultHolder = document.getElementById('result-holder');

  if (parseInt(ageInput.value) < 0) {
    errorsHolder.textContent = 'Age must be a positive number.';
    ageInput.value = '';
    return;
  }

  errorsHolder.textContent = '';

  const age = parseInt(ageInput.value);
  const ownsPhone = ownsPhoneInput.checked ? 'Yes' : 'No';

  resultHolder.innerHTML = `
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Owns a phone:</strong> ${ownsPhone}</p>
  `;
}