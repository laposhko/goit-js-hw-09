const form = document.querySelector('.feedback-form');
function getFeedbackDetails(event) {
  const emailElement = event.currentTarget.email;
  const messageElement = event.currentTarget.message;
  const feedbackDetails = {
    [emailElement.name]: emailElement.value.trim(),
    [messageElement.name]: messageElement.value.trim(),
  };
  return feedbackDetails;
}
function handleFormInput(event) {
  const jsonString = JSON.stringify(getFeedbackDetails(event));
  localStorage.setItem('feedback-form-state', jsonString);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const submittedDetails = getFeedbackDetails(event);
  if (
    submittedDetails.email.trim() == '' ||
    submittedDetails.message.trim() == ''
  ) {
    alert('All fields should be filled');
  } else {
    console.log(getFeedbackDetails(event));
    localStorage.clear();
    event.target.reset();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('feedback-form-state')) {
    const jsonString = localStorage.getItem('feedback-form-state');
    const feedbackDetails = JSON.parse(jsonString);
    form.email.value = feedbackDetails.email;
    form.message.value = feedbackDetails.message;
  }
});
form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmission);
