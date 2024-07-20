const menu = document.querySelector('.ham-menu');
const menuBg = document.querySelector('.menu'); 
const nav = document.querySelector('.offscreen-menu');
const email = document.getElementById('email');
const emailTwo = document.getElementById('email-2');
const errorMessage = document.querySelector('.error-message');
const emailError = document.querySelector('.email-error');
const button = document.getElementById('email-2-submit');
const formOne = document.getElementById('form-1');
const formTwo = document.getElementById('form-2');
let emailValid = false;

const regex = /^(?=[^@]+@)([a-zA-Z0-9-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,6})(\.[a-zA-Z]{1,2})?$/

menu.addEventListener('click', function(){
    console.log("open menu!");  
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    menuBg.classList.toggle('active');
})

email.addEventListener('input', function(){

    if(!regex.test(email.value)){
        email.classList.add('error');
        errorMessage.classList.add('show');
    }else{
        email.classList.remove('error');
        errorMessage.classList.remove('show');
    }

})

emailTwo.addEventListener('input', function(){
    emailValid = emailValid;
    if(!regex.test(emailTwo.value)){
        emailError.textContent = "Enter a valid email";
        emailError.style.color = "#ff3a3a";
        emailTwo.classList.add('error');
        emailError.classList.add('show');
        emailValid = false;
    }else{
        emailValid = true;
        emailTwo.classList.remove('error');
        emailError.classList.remove('show');
    }
})


formOne.addEventListener('submit', function(e){
    e.preventDefault();
})

formTwo.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(emailValid);

    if(emailValid === true){
        emailError.textContent = "Submitting...";
        emailError.style.color = "#fff";
        emailError.classList.add('show');
    }else{
        emailError.textContent = "Enter a valid email";
        emailError.classList.add('show');
    }
})