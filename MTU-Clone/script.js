const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index *  100}%)`;
}

function nextSlide() {
    if (slideIndex < slider.children.length - 1) {
        slideIndex++;
        showSlide(slideIndex);
        
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide(slideIndex);
    }
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

showSlide(slideIndex);



// NAVBAR SECTION Nav link 1

var sus = document.getElementById("under-menu");
var btn = document.getElementById("btn-hover");
console.log(btn)

btn.onmouseover=function(){
    sus.style.display = "block"
}

btn.onmouseleave=function(){
    sus.style.display="none"
}
sus.onmouseover=function(){
    sus.style.display="block"
}
sus.onmouseleave=function(){
    sus.style.transition="2s"
    sus.style.display="none"
}

// NAVBAR SECTION Nav link 2
var abtus = document.querySelector(".under-menu-2")
var aboutus = document.querySelector(".btn-hover2")
console.log(aboutus)
aboutus.onmouseover=function(){
    abtus.style.display="block"
}
aboutus.onmouseleave=function(){
    abtus.style.display="none"
}
abtus.onmouseover=function(){
    abtus.style.display="block"
}
abtus.onmouseleave=function(){
    abtus.style.display="none"
}

// NAVBAR Sec link 3
var news = document.querySelector(".under-menu-3")
var newsandmedia = document.querySelector(".btn-hover3")
console.log(newsandmedia)
newsandmedia.onmouseover=function(){
    news.style.display="block"
}
newsandmedia.onmouseleave=function(){
    news.style.display="none"
}
news.onmouseover=function(){
    news.style.display="block"
}
news.onmouseleave=function(){
    news.style.display="none"
}
// NAVBAR Sec link 4
var career = document.querySelector(".under-menu-4")
var carrar = document.querySelector(".btn-hover4")
console.log(carrar)
carrar.onmouseover=function(){
    career.style.display="block"
}
carrar.onmouseleave=function(){
    career.style.display="none"
}
career.onmouseover=function(){
    career.style.display="block"
}
career.onmouseleave=function(){
    career.style.display="none"
}
// NAVBAR Sec link 5
var contact = document.querySelector(".under-menu-5")
var contact2 = document.querySelector(".btn-hover5")
console.log(contact2)
contact2.onmouseover=function(){
    contact.style.display="block"
}
contact2.onmouseleave=function(){
    contact.style.display="none"
}
contact.onmouseover=function(){
    contact.style.display="block"
}
contact.onmouseleave=function(){
    contact.style.display="none"
}