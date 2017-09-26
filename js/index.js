document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["VIDEOS^500", "PDF^500","SONGS^500","ANYTHING^500"],
        typeSpeed: 200,
        loop: true,
        backSpeed:50
    }

    var typed = new Typed(".element", options);
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
setInterval(()=>{
$('#introt .icons i').css({"color":"white"});
let i=getRandomInt(1,5);
$(`#introt .icons i:nth-child(${i})`)[0].style.color="#ee3d49";
},500);
