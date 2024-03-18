// const plus = document.querySelector(".plus"),
//   minus = document.querySelector(".minus"),
//   num = document.querySelector(".num");
// let a = 1;
// plus.addEventListener("click", () => {
//   a++;
//   a = a < 10 ? "0" + a : a;
//   num.innerText = a;
// });

// minus.addEventListener("click", () => {
//   if (a > 1) {
//     a--;
//     a = a < 10 ? "0" + a : a;
//     num.innerText = a;
//   }
// })

const myLink = document.querySelector(".login__link");
const btnLogin = document.querySelector(".login__btn");
const myTitle = document.querySelector('.login__title')
const haveAccount = document.querySelector('.login__sign-in')
const myDesc = document.querySelector('.login__desc')

const changeForm = () => {
  myTitle.textContent = "Sign In";
  btnLogin.textContent= "Sign In";
  haveAccount.textContent = "You have not account ?"
  myLink.textContent = "create account";
  myDesc.textContent = "Sign in your account"
}