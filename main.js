
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(documentElement.scrollTop >20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }

}



//nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');
navBar.forEach(function(a){
    a.addEventListner("click",function(){
        navCollapse.classList.remove("show");
    })
})


//counter design

document.addEventListner("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1: -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("counter1", 0, 1287, 3000);
    counter("counter2", 150, 1508, 2600);
    counter("counter3", 0, 1288, 3000);
    counter("counter4", 0, 1973, 3000);

}

function scrolll() {
    var left=document.querySelector("scroll-images");
    left.scrollBy(350,0)
  }
  function scrollr() {
    var right=document.querySelector("scroll-images");
    right.scrollBy(350,0)
  }