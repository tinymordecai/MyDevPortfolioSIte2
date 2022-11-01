const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls')
const secBtn = document.querySelectorAll('control')
const allSections = document.querySelectorAll('main content');

//Button Click Active
function pageTrans(){
    for(let i=0; i < secBtn.length; i++){
        sectBtns[i].addEventListener('click',()=>{
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn'
        })
    }
}
pageTrans();