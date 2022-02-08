const form = document.forms.main;
const formLogin = form.login;
const formPassword = form.password;
const formEmail = form.email;
const formRadio = form.nameRadio;
const formCheckbox = form.nameCheck;
const formTextarea = form.textarea;
const invalidSymb = document.querySelector(".invalidSymb");
const invalidSymb1 = document.querySelector(".invalidSymb1");
const invalidSymb2 = document.querySelector(".invalidSymb2");
const invalidSymb3 = document.querySelector(".invalidSymb3");
const invalidSymb4 = document.querySelector(".invalidSymb4");

const textarea = document.querySelector(".textarea");
const textareaLimit = textarea.getAttribute("maxlength");
const textareaCounter = document.querySelector(".textarea-counter");
textareaCounter.innerText = textareaLimit;

textarea.addEventListener("input", () => {
  const counterResult = textareaLimit - textarea.value.length;
  textareaCounter.innerText = counterResult;
});

const getLoginValidationMessage = (login) => {
  if (login.value === "") {
    return "Це поле не може бути порожнім";
  }
};

const getEmailValidationMessage = (email) => {
  const FORBIDEN_DOMAINS = ["@yandex.ru", "@mail.ru"];

  if (FORBIDEN_DOMAINS.some((domain) => email.endsWith(domain))) {
    return "Нехай щастить! Путін - ***ло!";
  }

  if (email.value === "") {
    return "Це поле не може бути порожнім";
  }
};

const getPasswordValidationMessage = (password) => {
  if (password.length < 6) {
    return "Пароль повинен містити більше 6 символів";
  }
  if (password.value === "") {
    return "Це поле не може бути порожнім";
  }
  if (!/[A-Z]/g.test(password)) {
    return "Пароль має містити принаймні одну велику літеру";
  }
  if (!/[a-z]/g.test(password)) {
    return "Пароль має містити принаймні одну малу літеру";
  }
  if (!/[0-9]/g.test(password)) {
    return "Пароль має містити принаймні одну цифру";
  }
};

const getRadioValidationMessage = (radio) => {
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      return;
    }
  }
  return "Вже час визначитися із статтю";
};

const getСheckboxValidationMessage = (checkbox) => {
  if (!checkbox.checked) {
    return "Треба покласти галочку";
  }
};

const triggerField = (field, messageBox, message) => {
  if (message) {
    field.classList.add("invalid");
    field.classList.remove("correct");
    messageBox.style.display = "inline-block";
    messageBox.innerText = `❌ ${message}`;
    return;
  }

  if (field.value === "") {
    field.classList.add("invalid");
    field.classList.remove("correct");
    messageBox.style.display = "inline-block";
    messageBox.innerText = `❌`;
    return;
  }

  field.classList.remove("invalid");
  field.classList.add("correct");
  messageBox.style.display = "inline-block";
  messageBox.innerText = `✅`;
};

formLogin.addEventListener("blur", () => {
  const login = formLogin.value;
  triggerField(formLogin, invalidSymb, getLoginValidationMessage(login));
});

formEmail.addEventListener("blur", () => {
  const email = formEmail.value;
  triggerField(formEmail, invalidSymb2, getEmailValidationMessage(email));
});

formPassword.addEventListener("blur", () => {
  const password = formPassword.value;
  triggerField(
    formPassword,
    invalidSymb1,
    getPasswordValidationMessage(password)
  );
});

form.addEventListener("submit", (e) => {
  const login = formLogin.value;
  const loginMessage = getLoginValidationMessage(login);
  triggerField(formLogin, invalidSymb, loginMessage);

  const email = formEmail.value;
  const emailMessage = getEmailValidationMessage(email);
  triggerField(formEmail, invalidSymb2, emailMessage);

  const password = formPassword.value;
  const passwordMessage = getPasswordValidationMessage(password);
  triggerField(formPassword, invalidSymb1, passwordMessage);

  const radio = formRadio;
  const radioMessage = getRadioValidationMessage(radio);
  for (const r of radio) {
    triggerField(r, invalidSymb3, radioMessage);
  }

  const checkbox = formCheckbox;
  const checkboxMessage = getСheckboxValidationMessage(checkbox);
  triggerField(formCheckbox, invalidSymb4, checkboxMessage);

  if (
    emailMessage ||
    passwordMessage ||
    loginMessage ||
    radioMessage ||
    checkboxMessage
  ) {
    e.preventDefault();
  }
});
