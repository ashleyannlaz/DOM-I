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


// Main Content Section - Top Text
const featuresHead = document.querySelector(".top-content .text-content h4")
featuresHead.textContent = siteContent["main-content"]["features-h4"];

const featuresText = featuresHead.nextElementSibling;
featuresText.textContent = siteContent["main-content"]["features-content"];

const aboutHead = featuresText.nextElementSibling;
//aboutHead.textContent = siteContent["main-content"]["features-content"];

// featuresHead.textContent = siteContent["main-content"]["features-h4"];

// const featuresText = document.querySelector(".top-content .text-content p")
// featuresText.textContent = siteContent["main-content"]["features-content"];


// Image Section 
const midImage = document.querySelector(".middle-img")
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

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

