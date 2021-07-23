const myButton = document.getElementById("mybutton");
console.log("myButton");
myButton.addEventListener("click", function () {
    alert("My Button Clicked!");
});

const backGround = document.getElementById("changebackground");
const blueBody = document.getElementsByClassName("blue-background");

backGround.addEventListener("click", function () {
    blueBody.classList.toggle("red-background")
})