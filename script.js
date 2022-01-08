const header = document.querySelector('header')
const smiley = document.getElementById('smiley');

header.addEventListener('mouseenter', function(){
    smiley.classList.add('smiley-rotate');
})
header.addEventListener('mouseleave', function(){
    smiley.classList.remove('smiley-rotate');
})
