/* Use of external service : EmailJS to send mail */
/* See https://.emailjs.com */

/* Service is not activate now, for the purpose of the exercise, 
it is only a fake submit of the message - see code and comments below */


const thankYouMsgElt = document.getElementById("thank-you-msg");
const formELt = document.getElementById("contact-form");
const buttonElt = document.getElementById("sendButton");
const textareaElt = document.getElementById("textarea-msg");

formELt.addEventListener("submit", function(event) {

    event.preventDefault(); /* No refresh */
    /* Message appears */
    thankYouMsgElt.style.display = "block"; 
    buttonElt.style.display = "none";
    document.body.style.cursor = "wait";

    /* Fake refresh */
    setTimeout(() => {
        thankYouMsgElt.style.display = "none"; 
        buttonElt.style.display = "block";
        document.body.style.cursor = "default";
        textareaElt.value = "";
    }, 4000);
    

    /* Send form via EmailJs */

    /* To make it operationnal, you need to : 
     - uncomment that
     - make your emailJS accessible for the HMTL file (see head script).
     - check if your 'contact_form' template in emailJS website dashboard is ready.
     - redirect mail to the adress mail you want (still in EmailJS dashboard).
    */


    // emailjs.sendForm('default_service', 'contact_form', formELt)
    //     .then(function(response) {
    //         /* after success, refresh page */
    //         location.reload();
            
    //     }, function(error) {
    //         /* Message if error */
    //         window.alert("Oups something must be wrong here.");
    //     }); 

});