document.addEventListener('DOMContentLoaded', () => {


const hamburgerButton = document.getElementsByClassName('hamburger-button')[0]
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
const hamburgerXButton = document.getElementsByClassName('hamburger-x-button')[0]


console.log("THISSIDIOSJDSKDLASd");



hamburgerButton.addEventListener('click', () => {
    console.log('this is a test');
    hamburgerMenu.style.display = "block";
    hamburgerButton.style.display = "none"
})

hamburgerXButton.addEventListener('click', () => {
    hamburgerMenu.style.display = "none"; 
    hamburgerButton.style.display = "block"
})


});


