const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

const home = document.createElement('a');
home.textContent = 'Home';
home.style.color = 'green';
document.querySelector('nav').prepend(home);

const ad = document.createElement('a');
ad.textContent = 'Advertise';
ad.style.color = 'green';
document.querySelector('nav').appendChild(ad);

navLinks[0].style.color = 'green';
navLinks[1].style.color = 'green';
navLinks[2].style.color = 'green';
navLinks[3].style.color = 'green';
navLinks[4].style.color = 'green';
navLinks[5].style.color = 'green';

console.log(navLinks[3])
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// CTA Section

const domHeader = document.querySelector("section div h1")
domHeader.textContent = siteContent.cta.h1;

const domHeaderButton = document.querySelector("section div button")
domHeaderButton.textContent = siteContent.cta.button;

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);


// Features & About

const tops = document.querySelectorAll('.top-content h4')
tops[0].textContent = siteContent["main-content"]["features-h4"];
tops[1].textContent = siteContent["main-content"]["about-h4"];

const topsContent = document.querySelectorAll('.top-content p')
topsContent[0].textContent = siteContent["main-content"]["features-content"];
topsContent[1].textContent = siteContent["main-content"]["about-content"];

// Image Section - Done!
const midImage = document.querySelector(".middle-img")
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Services Product Vision

const bots = document.querySelectorAll('.bottom-content h4')
bots[0].textContent = siteContent["main-content"]["services-h4"];
bots[1].textContent = siteContent["main-content"]["product-h4"];
bots[2].textContent = siteContent["main-content"]["vision-h4"];

const botsText = document.querySelectorAll('.bottom-content p')
botsText[0].textContent = siteContent["main-content"]["services-content"];
botsText[1].textContent = siteContent["main-content"]["product-content"];
botsText[2].textContent = siteContent["main-content"]["vision-content"];

// Contact - Done
const contactHead = document.querySelector('.contact h4')
contactHead.textContent = siteContent["contact"]["contact-h4"]

address = contactHead.nextElementSibling;
address.textContent = siteContent["contact"]["address"] 

phone = address.nextElementSibling;
phone.textContent = siteContent["contact"]["phone"] 

email = phone.nextElementSibling;
email.textContent = siteContent["contact"]["email"] 

// Footer - Done!
const footerText = document.querySelector('footer p');
footerText.textContent = siteContent["footer"]["copyright"];

