// header nav
const bar = document.getElementById('bar');
const nav = document.querySelector('.nav');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

const close = document.getElementById('close');
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// newsletter
  const button = document.getElementById("button-addon2");
  const emailInput = document.getElementById("emailInput");

  button.addEventListener("click", function () {
    const email = emailInput.value.trim();

    if (email.includes("@")) {
      alert("Valid email! Registration successful.");
    } else {
      alert("Invalid email address. It must contain '@'.");
    }
  });

// form-input contact
function validateForm() {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const subject = document.getElementById("subjectInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email address. It must contain '@'.");
      return;
    }
    alert("Message sent successfully!");
  }