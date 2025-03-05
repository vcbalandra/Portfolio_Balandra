document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("active");
});

const header = document.querySelector('.header');
    
const scrollThreshold = 600; 

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('light-background'); 
    } else {
        header.classList.remove('light-background'); 
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn-icon'); 
    const sections = document.querySelectorAll('.content-section');  

    const aboutSection = document.getElementById('about-content');
    aboutSection.classList.add('active'); 

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const currentActive = document.querySelector('.content-section.active');
            if (currentActive) {
                currentActive.classList.remove('active');
                currentActive.style.opacity = 0; 
            }

            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            setTimeout(() => {
                targetSection.classList.add('active');
                targetSection.style.opacity = 1; 
            }, 400);  
        });
    });
});
document.querySelectorAll('.project-list').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.project-list.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active');
        
        item.classList.add('active');
        
        const tabId = item.getAttribute('data-tab');
        const newPane = document.getElementById(tabId);
        
        newPane.classList.add('active');
    });
});