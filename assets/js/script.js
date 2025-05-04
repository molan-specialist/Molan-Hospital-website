// Hamburger Menu
const nav = document.querySelector(".nav"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// Scrolling Navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});
  

// Typing Effect
// const dynamicText = document.querySelector("h1 span");
// const words = ["Outstanding", "Exceptional", "Unique"];
// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// const typeEffect = () => {
//     const currentWord = words[wordIndex];
//     const currentChar = currentWord.substring(0, charIndex);
//     dynamicText.textContent = currentChar;
//     dynamicText.classList.add("stop-blinking");
//     // Condition....
//     if (!isDeleting && charIndex < currentWord.length) {
//         charIndex++;
//         setTimeout(typeEffect, 200);
//     } else if (isDeleting && charIndex > 0) {
//         charIndex--;
//         setTimeout(typeEffect, 100);
//     } else {
//         isDeleting = !isDeleting;
//         dynamicText.classList.remove("stop-blinking");
//         wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
//         setTimeout(typeEffect, 1200);
//     }
// }
// typeEffect();

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}