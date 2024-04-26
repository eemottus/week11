const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');

const colors = ['red', 'green', 'blue', 'yellow', 'green', 'purple'];


myButton.addEventListener('click', changeColor);

function changeColor() {
    console.log(myBox);
    let randomIndex = Math.floor(Math.random() * colors.length);
    myBox.style.backgroundColor = colors[randomIndex];
}