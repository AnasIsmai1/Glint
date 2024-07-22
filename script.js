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
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const circles = document.querySelectorAll('.circle');

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
        if(entry.isIntersecting)conObserver.unobserve(entry.target);
    })
},
{
    threshold : .25,
})


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
    threshold : .45,
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
conObserver.observe(formOne);


const tests = document.querySelectorAll('.test');

arrowLeft.addEventListener('click', () => {
    testSliderPrev();
})
arrowRight.addEventListener('click', () => {
    testSliderNext();
})

var testId;


function getCurrentTest() {
    tests.forEach( t => {
        const tStyle = window.getComputedStyle(t);
        // console.log(tStyle);
        if(!(tStyle.getPropertyValue("display") == 'none')) {
            // console.log(t);
            testId = t.getAttribute('data-test');
            testId = testId;

        }
    })
}

function testSliderNext() {
    getCurrentTest();
    let tempId = testId;

    if(tempId == 3) {
        checkClicked();
        let tempTest = document.querySelector(`.test__${tempId}`);
        tempTest.classList.remove('show');
        tempId = 1;
        tempTest = document.querySelector(`.test__${tempId}`);
        testCircle = document.getElementById(`circle${tempId}`);
        testCircle.classList.add('clicked');
        tempTest.classList.add('show');
    }else {
        checkClicked();
        let tempTest = document.querySelector(`.test__${tempId}`);
        tempTest.classList.remove('show');
        tempId++;
        tempTest = document.querySelector(`.test__${tempId}`);
        testCircle = document.getElementById(`circle${tempId}`);
        testCircle.classList.add('clicked');
        tempTest.classList.add('show');
    }
}

function testSliderPrev() {
    getCurrentTest();
    let tempId = testId;

    if(tempId == 1) {
        checkClicked();
        let tempTest = document.querySelector(`.test__${tempId}`);
        tempTest.classList.remove('show');
        tempId = 3;
        tempTest = document.querySelector(`.test__${tempId}`);
        testCircle = document.getElementById(`circle${tempId}`);
        testCircle.classList.add('clicked');
        tempTest.classList.add('show');
    }else {
        checkClicked();
        let tempTest = document.querySelector(`.test__${tempId}`);
        tempTest.classList.remove('show');
        tempId--;
        tempTest = document.querySelector(`.test__${tempId}`);
        testCircle = document.getElementById(`circle${tempId}`);
        testCircle.classList.add('clicked');
        tempTest.classList.add('show');
    }
}

function checkClicked() {
    circles.forEach( circle => {
        circle.classList.remove('clicked');
    })
}

circles.forEach( circle => {
    
    circle.addEventListener('click',() => {
        checkClicked();
        getCurrentTest();
        let tempId1 = testId;
        let tempTest = document.querySelector(`.test__${tempId1}`);
        tempTest.classList.remove('show');

        circle.classList.add('clicked');
        let tempId2 = circle.getAttribute('data-test-link');
        tempTest = document.querySelector(`.test__${tempId2}`);
        tempTest.classList.add('show');
    })
})