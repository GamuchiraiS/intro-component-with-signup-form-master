/* Get elements from DOM and assign them to variables */
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#claim__btn");
const errorMessageHide = document.querySelectorAll(".hidden");
const inputImg = document.querySelector(".input__img");
const allInputs = [fname, lname, email, password];

/* When the "Claim your free trail" btn is 
clicked, form validation takes place */
btn.addEventListener('click', function(event){
    event.preventDefault();
    /* Regexes */
    let nameRegex = /([A-Z])\w+/g;
    let emailRegex =  /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
/*     This allows us to go through the values in
        the allInputs array */
    allInputs.forEach(function(input) {
        /* If input is fname which would be the input
        for the first name */
        if(input === fname){
            /* If fname is empty or it doesn't match nameRegex
            display the error message, show the error icon
            and style the border 
            */
            if(!fname.value || !(fname.value).match(nameRegex)){
                /* errorMessageHide is returned as a NodeList
                so we use [] to access the different error messages 
                returned */
                errorMessageHide[0].style.display = "block";
                input.style.backgroundImage = "url('./images/icon-error.svg')";
                input.style.border = "2px solid red";
            }
            /* If input equals last name */
        }else if(input === lname){
            /* If lname is empty or it doesn't match nameRegex
            display the error message, show the error icon
            and style the border 
            */
            if(!lname.value || !(lname.value).match(nameRegex)){
                errorMessageHide[1].style.display = "block";
                input.style.backgroundImage = "url('./images/icon-error.svg')";
                input.style.border = "2px solid red";
            }
            /* If input equals email */
        }else if(input === email){
            /* If email is empty or it doesn't match emailRegex
            display the error message, show the error icon
            and style the border 
            */
            if(!email.value || !(email.value).match(emailRegex)){
                errorMessageHide[2].style.display = "block";
                input.style.backgroundImage = "url('./images/icon-error.svg')";
                input.style.border = "2px solid red";
            }
            /* If input equals password */
        }else if(input === password){
            /* If password is empty
            display the error message, show the error icon
            and style the border 
            */
            if(!password.value){
                errorMessageHide[3].style.display = "block";
                input.style.backgroundImage = "url('./images/icon-error.svg')";
                input.style.border = "2px solid red";
            }
        }
    }) //forEach
}) //addEventListener


