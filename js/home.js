// document.onclick = function () {
// alert('You have clicked somewhere in the document')

// }
// function simpleMassage() {
//     alert("this message")
// }
// setTimeout(simpleMassage, 5000)

let myImage = document.getElementById("image1");

let imageArray = ["img/IMG_9590.jpeg", "img/WhatsApp Image 2020-04-15 at 14.50.11 (1).jpeg", "img/IMG_9594.jpg","img/IMG-20190321-WA0026.jpg"];

let imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }

}
setInterval(changeImage, 5000);