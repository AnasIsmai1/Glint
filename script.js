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
const stats = document.querySelectorAll('.stats');
const stat = document.querySelectorAll('.stat');
const heroWrapper = document.querySelector('.hero-wrapper');
const secOneSpan = document.querySelector('.sec-1-span');
const secOneHeading = document.querySelector('.sec-1-h2');
const secOnePara = document.querySelector('.sec-1-p');
const secTwoSpan = document.querySelector('.sec-2-span');
const secTwoHeading = document.querySelector('.sec-2-h2');
const boxes = document.querySelectorAll('.box');
const secFourSpan = document.querySelector('.sec-4-span');
const secFourHeading = document.querySelector('.sec-4-h2');
const scrollBar = document.querySelector('.scroll-bar');
const secFiveSpan = document.querySelector('.sec-5-span');
const secFiveHeading = document.querySelector('.sec-5-h2'); 

let emailValid = false;
let statShow = false;

const regex = /^(?=[^@]+@)([a-zA-Z0-9-\._]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,6})(\.[a-zA-Z]{1,2})?$/

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


const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);
    })
}, 
{
    threshold : .75,
}
)

const conObserver = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        if(entry.isIntersecting) {
            observer.unobserve(entry.target)
        };
    })
}, 
{
    threshold : .35,
}
)


const statObserver = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        if(entry.isIntersecting) {
            statObserver.unobserve(entry.target);
                stat.forEach(st => {
                    let initValue =+ 0;
                    let hId = st.getAttribute('data-targetH');
                    let heading = document.querySelector(`.${hId}`);
                    let target = heading.getAttribute('data-target');
                    let speed = 10;
                    let newSpeed = (target / speed) / 10;
    
                    let counter = setInterval(function(){
                        initValue += newSpeed;
                        console.log(initValue);
                        heading.textContent = Math.floor(initValue);
                        if(initValue >= target-1) {
                            clearInterval(counter);
                        }
                    }, 10)
                })
        }
    })
}, 
{
    threshold : .65,
}
)

stats.forEach(
    st => {
        statObserver.observe(st);
    } 
)

boxes.forEach( box => {
    observer.observe(box);
})

observer.observe(heroWrapper);
observer.observe(secOneSpan);
observer.observe(secOneHeading);
observer.observe(secOnePara);
observer.observe(secTwoSpan);
observer.observe(secTwoHeading);
observer.observe(secFourSpan);
observer.observe(secFourHeading);
observer.observe(scrollBar);
observer.observe(secFiveSpan);
observer.observe(secFiveHeading);
observer.observe(formOne);
