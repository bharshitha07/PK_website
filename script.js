
/* ===========================
   STICKY NAVBAR EFFECT
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

navbar.style.background = "rgba(2, 6, 15, 0.98)";
navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

}
else{

navbar.style.background = "rgba(5,11,23,0.95)";
navbar.style.boxShadow = "none";

}

});


/* ===========================
   MOBILE MENU TOGGLE
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){

menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

}
else{

menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

}

});


/* ===========================
   CLOSE MOBILE MENU
=========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

menuBtn.innerHTML =
'<i class="fa-solid fa-bars"></i>';

});

});


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

});

});


/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navItems.forEach(link => {

link.classList.remove("active-link");

if(
link.getAttribute("href") ===
`#${current}`
){

link.classList.add("active-link");

}

});

});


/* ===========================
   SCROLL REVEAL ANIMATION
=========================== */

const revealElements = document.querySelectorAll(
".service-card, .theatre-card, .partner-box, .why-card, .about-text, .about-image, .contact-info, .contact-form"
);

const revealOnScroll = () => {

revealElements.forEach(element => {

const windowHeight =
window.innerHeight;

const revealTop =
element.getBoundingClientRect().top;

const revealPoint = 120;

if(revealTop < windowHeight - revealPoint){

element.classList.add("show");

}

});

};

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


/* ===========================
   BACK TO TOP BUTTON
=========================== */

const backToTop =
document.createElement("div");

backToTop.className = "back-to-top";

backToTop.innerHTML =
'<i class="fa-solid fa-chevron-up"></i>';

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

backToTop.classList.add("show-top");

}
else{

backToTop.classList.remove("show-top");

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top:0,
behavior:"smooth"

});

});


/* ===========================
   HERO BUTTON ANIMATION
=========================== */

const heroButtons =
document.querySelectorAll(
".btn-primary, .btn-secondary"
);

heroButtons.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform =
"translateY(-5px)";

});

button.addEventListener("mouseleave", () => {

button.style.transform =
"translateY(0px)";

});

});


/* ===========================
   PAGE LOAD ANIMATION
=========================== */

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});


/* ===========================
   OPTIONAL CONSOLE MESSAGE
=========================== */

console.log(
"PK Entertainments Website Loaded Successfully"
);


/* ===========================
   WHATSAPP INQUIRY FORM
=========================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const phone =
document.getElementById("phone").value;

const message =
document.getElementById("message").value;


/* YOUR WHATSAPP NUMBER */

const whatsappNumber =
"+91 919000135543";


const whatsappMessage =

`Hello PK Entertainments,

New Website Inquiry

Name: ${name}

Email: ${email}

Phone: ${phone}

Requirement:
${message}`;

const encodedMessage =
encodeURIComponent(
whatsappMessage
);

const whatsappURL =

`https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

window.open(
whatsappURL,
"_blank"
);

alert(
"Thank you! You will now be redirected to WhatsApp."
);

contactForm.reset();

});

}

