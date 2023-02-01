

/*opgave 1 plus minus*/
let myButtonValue = 0;
const myButtonResult = document.getElementById('buttonResult');
const myAddButton = document.getElementById('addButton');
const mySubButton = document.getElementById('subtractButton');


myAddButton.addEventListener('click', (e) => {
    e.preventDefault();
    myButtonValue = myButtonValue - 1;

    showResult('værdi: ' + myButtonValue, myButtonResult)
});


mySubButton.addEventListener('click', (e) => {
    e.preventDefault();

    myButtonValue = myButtonValue + 1;

    showResult('værdi: ' + myButtonValue, myButtonResult)
});






/* opgave 2 dice*/
const myDiceRes = document.getElementById('diceResult');
const diceButton = document.getElementById('rollDiceOne');


diceButton.addEventListener('click', (e) => {
    e.preventDefault();

    let diceRoll = getRandomNumber(1, 6);

    showResult(diceRoll, myDiceRes)

});








/* opgave 3 key event */

const myLiveText = document.getElementById('myLiveText');
let myLiveTextResult = document.getElementById('tasteResult');

myLiveText.addEventListener('keyup', (e) => {
    e.preventDefault();

    showResult(myLiveText.value, myLiveTextResult);


});







/* view code*/
/* viser data i et DOM element, kræver to parametre: data til at vise og elementet det skal vises i.*/
function showResult(myData, myElement) {
    myElement.innerHTML = myData;
}


/* support functions-------------------------------------------------------------------------------*/

/* random function. skal bruge en min værdi og en max værdi.
returnerer et tilfældigt tal mellem min og max værdierne*/

function getRandomNumber(min, max) {
    let myMin = Math.ceil(min);
    let myMax = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

