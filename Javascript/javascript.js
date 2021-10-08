let header = document.querySelector('.header');
let site = document.querySelector('.site');
let more = document.querySelector('.more');

const text = document.querySelector('.prm');

// let links = Array.from(document.querySelectorAll('.link'));


function animate() {
    setTimeout(() => {
        header.classList.add('active');
    }, 2000);

    setTimeout(() => {
        // site.classList.add('active');
        // more.classList.add('active');

    }, 3000);

    // links.forEach((link, index) => {
    //     setTimeout(() => {
    //         link.classList.add('active');
    //     }, (index * 200) + 2500);
    // })
}

animate()


const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 15);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('prm');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
