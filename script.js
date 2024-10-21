// header

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// typing effect 
let typed = new Typed('.auto-input',{
    strings: ['software engineering student', 'Ai engineering student'],
    typeSpeed: 100,
    backSpeed : 100,
    backDelay : 2000,
    loop : true,
})
// get all link 
let navLinks = document.querySelectorAll('nav ul li a')
// get all section 
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos = this.window.scrollY + 20
    sections.forEach(section => {
        if (scrollPos > section.offsetTopn && scrollPos <(section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1) ){
                    link.classList.add('active')
                }
            });
        }
    });
});