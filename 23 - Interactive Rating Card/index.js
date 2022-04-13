
// The variable secondCard is the Thanking Card - Div
const secondCard = document.querySelector(".card-tnx");
// The variable firstCard is the Rating Card - Div
const firstCard = document.querySelector('.card');
// The variable selectedRate is the Div, which is supposed to be written the selected rate text.
const selectedRate = document.querySelector('.card__select');
// Rate variable is defined to select all the rating buttons; selecting all of them by querySelectorAll is making them like function as an array
const rate = document.querySelectorAll('.rate');
// Defined a variable for submit button that when the user click the button one card should be appeared and the another one should be disappeared
const submittedBtn = document.querySelector('.btnSubmit');
submittedBtn.onclick = function () {
    secondCard.classList.toggle('active')
    firstCard.classList.toggle('deActive')
}
/* Since we cannot access each item of an array individually, I called the forEach function for each item and
added an eventListener with click type and the listener function. The function should do this this.
*/
rate.forEach((item) => {
    item.addEventListener("click", function () {
           selectedRate.innerHTML = `You selected ${item.value} out of 5`
    })
})


