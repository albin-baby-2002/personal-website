const form = document.getElementById("contact-form");

const names = document.getElementById("names");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit-button");
const message = document.getElementById("message");

function validateName() {
  const err = names.parentElement.querySelector("#error");

  if (names.value.length == 0) {
    err.innerHTML = "Enter your name";
    return false;
  } else if (!names.value.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    err.innerHTML = "Enter Full Name";
    return false;
  } else {
    err.innerHTML = "";
    return true;
  }
}

function validateMail() {
  const err = email.parentElement.querySelector("#error");

  if (email.value.length == 0) {
    err.innerHTML = "Enter your email";
    return false;
  } else if (
    !email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  ) {
    err.innerHTML = "Enter valid email";
    return false;
  } else {
    err.innerHTML = "";
    return true;
  }
}

function validateMessage() {
  const err = message.parentElement.querySelector("#error");

  if (message.value.length < 10) {
    err.innerHTML = "min length is 10 ";
    return false;
  } else {
    err.innerHTML = "";
    return true;
  }
}

form.addEventListener("submit", (e) => {
  if (names.value.length == 0) {
    e.preventDefault();

    const err = names.parentElement.querySelector("#error");
    err.innerHTML = "Enter your name";
  }

  if (email.value == "" || email.value == null) {
    e.preventDefault();
    const err = email.parentElement.querySelector("#error");
    err.innerHTML = "Enter an email id";
  }

  if (!validateMessage() || !validateName() || !validateMail()) {
    e.preventDefault();
  }
});

submitBtn.addEventListener("click", () => {
  if (validateMail() && validateName() && validateMessage()) {
    window.alert("Submitted successfullly");
  }
});
