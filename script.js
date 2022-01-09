const header = document.querySelector('header')
const smiley = document.getElementById('smiley');
const leftProject = document.getElementById('project-left');
const rightProject = document.getElementById('project-right');

header.addEventListener('mouseenter', function(){
    smiley.classList.add('smiley-rotate');
})
header.addEventListener('mouseleave', function(){
    smiley.classList.remove('smiley-rotate');
})

function loadProjects() { 
    setTimeout(function(){
        leftProject.style.left = 0;
    }, 700);
    setTimeout(function(){
        rightProject.style.left = 0;
    }, 1100);
}

window.onload = loadProjects;
