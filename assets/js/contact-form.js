const form = document.getElementById("contactForm");
const statusElement = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusElement.textContent = "Sending...";

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      statusElement.textContent = "Message sent successfully!";
      form.reset();
    } else {
      statusElement.textContent = "Oops! Something went wrong.";
    }
  } catch (error) {
    statusElement.textContent = "Network error. Try again.";
  }
});
