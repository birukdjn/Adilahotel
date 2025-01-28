function isInViewport(element){
    const rect=element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >=0;
}

function checkscroll(){
    const newsSection=document.getElementById('home');
    if(isInViewport(newsSection)){
        newsSection.classList.add(visible);
    }
}
function checkscroll(){
    const newsSection=document.getElementById('news');
    if(isInViewport(newsSection)){
        newsSection.classList.add(visible);
    }
}
function checkscroll(){
    const newsSection=document.getElementById('rooms');
    if(isInViewport(newsSection)){
        newsSection.classList.add(visible);
    }
}
function checkscroll(){
    const newsSection=document.getElementById('gallery');
    if(isInViewport(newsSection)){
        newsSection.classList.add(visible);
    }
}
function checkscroll(){
    const newsSection=document.getElementById('Services');
    if(isInViewport(newsSection)){
        newsSection.classList.add(visible);
    }
}
function checkscroll(){
    const newsSection=document.getElementById('Comments');
    if(isInViewport(newsSection)){
        newsSection.classList.add(visible);
    }
}
function checkscroll(){
    const newsSection=document.getElementById('Location');
    if(isInViewport(newsSection)){
        newsSection.classList.add('visible');
    }
}
function checkscroll(){
    const newsSection=document.getElementById('footer');
    if(isInViewport(newsSection)){
        newsSection.classList.add('visible');
    }
}
window.addEventListener('scroll', checkScroll);
checkScroll();