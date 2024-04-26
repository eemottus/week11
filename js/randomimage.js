const myButton = document.querySelector('button');
const image = document.querySelector('img');
const img = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * img.length);
    
    image.style.backgroundImage = img[randomIndex];

    image.src = "img/" + img[randomIndex];


    
}