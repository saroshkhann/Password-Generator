"use strict";

const btn = document.querySelector(".password__button");
const inputBox = document.querySelector(".password__input");
const labelInput = document.querySelector(".password__icon");
const container = document.querySelector(".container");
const value = document.querySelector(".password__value");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+><?~}{";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputBox.value = password;
}

const insertPassword = function () {
  const html = ` <p class="password__value">${inputBox.value}</p>`;

  container.insertAdjacentHTML("afterbegin", html);

  value.textContent = "";

  value.style.borderBottom = "none";
};

btn.addEventListener("click", () => {
  createPassword();
  insertPassword();
});

labelInput.addEventListener("click", () => {
  navigator.clipboard.writeText(inputBox.value);
});
