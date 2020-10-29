/* Create header and footer in js in order to re-use components in each page */


/* =========================== Header ================================= */

const headerElmt = document.getElementById('main-header');

/* Create Elements */
const logoElmt = document.createElement("img");

const listMenuElmt = document.createElement("ul");

const homeMenuElmt = createAnchorInListItem("Home", "./index.html")
const aboutMenuElmt = createAnchorInListItem("About", "./about.html")
const productsMenuElmt = createAnchorInListItem("Products", "./products.html")
const contactMenuElmt = createAnchorInListItem("Contact", "./contact.html")

/* Fill Elements */
logoElmt.setAttribute("src", "./images/logo.png");
logoElmt.setAttribute("alt", "logo-img");


/* Organise */
appendItemsToList(listMenuElmt, [homeMenuElmt, aboutMenuElmt, productsMenuElmt, contactMenuElmt])

/* Append to main */
headerElmt.appendChild(logoElmt);
headerElmt.appendChild(listMenuElmt);



/* =========================== Footer ================================= */

const footerElmt = document.getElementById('main-footer');

/* Create Elements */
const listLinksElmt = document.createElement("ul");

const instaElmt = createAnchorInListItem("Instagram", "https://www.instagram.com/munamii.cakery/", true);
const facebookElmt = createAnchorInListItem("Facebook", "https://www.facebook.com/munamiicupcakes/", true);
const mailElmt = createAnchorInListItem("Mail", "mailto:softwaredevelopmentacademy@gmail.com");

/* Organise */
appendItemsToList(listLinksElmt, [instaElmt, facebookElmt, mailElmt])

/* Append to main */
footerElmt.appendChild(listLinksElmt);
 




/* =--------------------- Functions to help creating elements ---------------------- */

function createAnchorInListItem (text, ref, targetBlank) {
    const newLiElmt = document.createElement("li");
    const newAElmt = document.createElement("a");

    newAElmt.innerHTML = text;
    newAElmt.setAttribute("href", ref)

    if (targetBlank) {
        newAElmt.setAttribute("target", "_blank");
    }

    newLiElmt.appendChild(newAElmt);
    
    return newLiElmt;
}

function appendItemsToList (listElmt, arrayOfItemsElmts) {   
    for (let i = 0; i < arrayOfItemsElmts.length; i++) {
        listElmt.appendChild(arrayOfItemsElmts[i]);
    }
}