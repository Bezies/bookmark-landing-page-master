// STOP REFRESH PAGE LINKS 

const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
    })
})

// CHANGE TAB 
 
function ActiveTab(index) {
    document.getElementById("tab1Content").style.display = "none";
    document.getElementById("tab2Content").style.display = "none";
    document.getElementById("tab3Content").style.display = "none";

    document.getElementById("tab" + index + "Content").style.display = "flex";
}




// FAQ 

const questions = document.querySelectorAll(".qa-box");
const answer = document.querySelectorAll(".answer")

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        answer[i].classList.toggle("unfold");
        questions[i].classList.toggle("rotate");
    })
}



// MAIL 

let regx = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function validateMail(mail) {
    if (regx.test(mail)) {
        return true
    } else {
        return false 
    }
}


const mail = document.querySelector("#mail");
const mailBox = document.querySelector(".mail-input")
const contact = document.querySelector(".contact-us")

contact.addEventListener("click", () => {
    mailBox.classList.remove("open")
   if (validateMail(mail.value) === false) {
    mailBox.classList.add("open");
   }
})





// MOBILE MENU 


const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const menu = document.querySelector(".nav-bar");
const logoDark = document.querySelector("#dark");

// OPEN 
hamburger.addEventListener("click", () => {
    menu.classList.remove("close");
    hamburger.style.display = "none";
    logoDark.style.display = "none"
})

// CLOSE 
cross.addEventListener("click", () => {
    menu.classList.add("close");
    hamburger.style.display = "block";
    logoDark.style.display = "block"
})