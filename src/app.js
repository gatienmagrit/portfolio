let toggle = document.querySelector(".toggle");
let close = document.querySelectorAll(".close");
let body = document.querySelector("body");

toggle.addEventListener('click',function() {
    body.classList.toggle('open');
})

close.forEach(element => {
    element.addEventListener('click',function(){
        body.classList.toggle('open');
    })
});

let case1 = document.querySelector(".grid_parcours_case1")

case1.addEventListener("mouseover", function() {
    body.classList.toggle('hover1');
});

case1.addEventListener("mouseout", function() {
    body.classList.toggle('hover1');
})

let case2 = document.querySelector(".grid_parcours_case2")

case2.addEventListener("mouseover", function() {
    body.classList.toggle('hover2');
});

case2.addEventListener("mouseout", function() {
    body.classList.toggle('hover2');
});
