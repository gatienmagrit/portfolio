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