const slidesProfilePic = document.querySelector('.hero .slides');
const slidesTestimonial = document.querySelector('.testimonials .slides');
const arrows = document.querySelectorAll('.arrow');
const uiTestimonials = document.querySelector('.testimonials');

const fast = 'slider-fast', medium = 'slider-medium', slow = 'slider-slow';
var allSliders = [];

const testimonials = data.testimonials;

populateSlides();

addListenersTo();

function populateSlides(){
    for (let i=0; i<testimonials.length; i++){
        let profilePic = new Image();
        profilePic.classList.add('profile-picture');
        profilePic.src = testimonials[i].endorser.picture ;
        slidesProfilePic.appendChild(profilePic);
        var testimonial = new Object();
        testimonial.quote = testimonials[i].quote;
        testimonial.name = testimonials[i].endorser.name;
        testimonial.role = testimonials[i].endorser.role;
        addTestimonial(testimonial);
    }
    allSliders.push(slidesProfilePic);
}

function addListenersTo() {
    for (let i=0; i<arrows.length; i++) {
        arrows[i].addEventListener('click', (e) => {
            if (e.target.dataset.side === 'left') {
                for (let j=0; j<allSliders.length; j++) {
                    allSliders[j].style.left = '-100%';
                }
            } else {
                for (let j=0; j<allSliders.length; j++) {
                    allSliders[j].style.left = '0%';
                }
            }        
        });
    }
}



function addTestimonial(testimonial) {
    let txtNode = document.createTextNode('" ' + testimonial.quote + ' "');
    let childNodes = [];
    childNodes.push(txtNode);
    createSlides('quotes', 'quote', childNodes, medium);

    let divName = document.createElement('div');
    divName.classList.add('name');
    let txtName = document.createTextNode(testimonial.name);
    divName.appendChild(txtName);
    childNodes = [];
    childNodes.push(divName);
    let divRole = document.createElement('div');
    divRole.classList.add('role');
    let txtRole = document.createTextNode(testimonial.role);
    divRole.appendChild(txtRole);
    childNodes.push(divRole);
    createSlides('endorsers', 'endorser', childNodes, fast);

}

function createSlides(frameContainerClassName, slideClassName, childNodes, speed) {
    let frameContainer = uiTestimonials.querySelector('.'+ frameContainerClassName);
    let frame;
    if (!frameContainer.hasChildNodes()){
        frame = getFrame(speed);
        frame.classList.add('frame');
        
    } else {
        frame = frameContainer.querySelector('.frame');
    }
    let slides = frame.querySelector('.slides');
    let slide = document.createElement('div');
    slide.classList.add(slideClassName);
    childNodes.forEach((element) => {
        slide.appendChild(element);
    });
    
    slides.appendChild(slide);
    allSliders.push(slides);
    frameContainer.appendChild(frame);
}

function getFrame(speed) {
    let divFrame = document.createElement('div');
    divFrame.classList.add('frame');
    let divSlides = document.createElement('div');
    divSlides.classList.add('slides', speed);
    divFrame.appendChild(divSlides);
    return divFrame;
}


// function addTestimonial(testimonial) {
//     let divTestimonial = document.createElement('div');
//     divTestimonial.classList.add('testimonial');
//     let divQuote = document.createElement('div');
//     divQuote.classList.add('quote');
//     let txtQuote = document.createTextNode('" ' + testimonial.quote + ' "');
//     divQuote.appendChild(txtQuote);
//     divTestimonial.appendChild(divQuote);
//     let divEndorser = document.createElement('div');
//     divEndorser.classList.add('endorser');
//     let divName = document.createElement('div');
//     divName.classList.add('name');
//     let txtName = document.createTextNode(testimonial.name);
//     divName.appendChild(txtName);
//     divEndorser.appendChild(divName);
//     let divRole = document.createElement('div');
//     divRole.classList.add('role');
//     let txtRole = document.createTextNode(testimonial.role);
//     divRole.appendChild(txtRole);
//     divEndorser.appendChild(divRole);
//     divTestimonial.appendChild(divEndorser);
//     slidesTestimonial.appendChild(divTestimonial);
// }

// function addListenersTo() {
//     for (let i=0; i<arrows.length; i++) {
//         arrows[i].addEventListener('click', (e) => {
//             if (e.target.dataset.side === 'left') {
//                 slidesProfilePic.style.left = '-100%';
//                 slidesTestimonial.style.left = '-100%';
//             } else {
//                 slidesProfilePic.style.left = '0%';
//                 slidesTestimonial.style.left = '0%';
//             }        
//         });
//     }
// }