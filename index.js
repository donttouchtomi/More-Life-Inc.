const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const orderDesciption = document.getElementById("subject");
const myH3 = document.getElementById("myH3");
const submit = document.getElementById("submit")

let fname;
let lname;
let subject;

submit.onclick = function(){


    fname = firstName.value;
    lname = lastName.value;

    if( typeof fname === "string" && fname.length > 0){
        myH3.textContent = `Your ${fname}`;
    } else {
        myH3.textContent = `Input a valid name`;
    }

    // myH3.textContent =`Thank You ${fname} ${lname} for your patronage`
}


