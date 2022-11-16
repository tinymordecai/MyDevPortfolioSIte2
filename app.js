const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');
let currentSection = 0;


//Button Click Active
function pageTrans(){
    for(let i = 0; i < secBtn.length; i++){
      secBtn[i].addEventListener('click', function() {
        sections[currentSection].classList.remove('active');
        secBtn[currentSection].classList.remove('active-btn');
        sections[currentSection = i].classList.add('active');
        secBtn[currentSection].classList.add('active-btn');
      })
        
        }
    } 
    // Active Sections
    

pageTrans();