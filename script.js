const toppings = document.querySelectorAll(".topping");
const checkoutButton = document.querySelector(".button");
const ingredients = document.querySelectorAll(".order .topping");
const answerHolder = document.querySelector("#total");
const tomatoNavButton = document.querySelector("#tomato");
const orderDiv = document.querySelector(".order");
const navButtons = document.querySelectorAll("#nav .topping");
let total = 0;

toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset.price);
  });
});

checkoutButton.addEventListener("click", () => {
   const toppings = document.querySelectorAll(".order .topping");
   toppings.forEach((topping) => {
     total += Number(topping.dataset.price);
   });
   answerHolder.innerHTML = `The total cost of your burger is $${total}`;
});

tomatoNavButton.addEventListener("click", () => {
   orderDiv.innerHTML +=
     '<div class="topping tomato" data-ingredient="tomato" data-price="0.30">Tomato</div>';
   });

navButtons.forEach((navButton) => {
   navButton.addEventListener("click", () => {
     orderDiv.innerHTML += `<div class="topping ${navButton.dataset.ingredient}" data-ingredient=${navButton.dataset.ingredient} data-price=${navButton.dataset.price}>${navButton.dataset.ingredient}</div>`;
   });
 });