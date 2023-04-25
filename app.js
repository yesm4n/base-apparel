// The most simple form I could find.

// Selecting ID form
const form = document.getElementById("myForm");
// Adding eventlistener submit type
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Preventing default behavior
  event.preventDefault();
  // Selecting ID email
  const email = document.getElementById("email").value;
  // Directing the email
  const url = `mailto:ylliramadani@gmail.com?subject=New email&body=${email}`;
  // Making it a URL?
  window.location.href = url;
  // Resetting the form after submitting
  form.reset();
}
