const addEventsonElement = function(elements , evenType , callback){
    for (let i=0,len=elements.length;i<len;i++){
        elements[i].addEventListener(evenType , callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navtogglebtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");
const togglenavbar = function() {
    navbar.classList.toggle("active");
    navtogglebtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventsonElement([navtogglebtn , overlay] , "click" , togglenavbar)