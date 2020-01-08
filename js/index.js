var b1 = document.querySelector(".banner_bottom");
var b2 = document.querySelector(".intro_left");
var b3 = document.querySelector(".plat_top_bottom2");
var b4 = document.querySelector(".plat_top_bottom1");
var speed =720 / window.innerHeight;
var speed1 =450/ window.innerHeight;
var speed2 =1000/ 5000;
var speed3 =800/ window.innerHeight;
window.onscroll = function () {
    window.console.log = (top);
    var top = document.documentElement.scrollTop;

    var angle = speed * top;
    if (angle <=360) {
        b1.style.transform = "rotate(" + angle + "deg)";
    } else {
        b1.style.transform = "rotate(360deg)";
    }

    var x = top * speed1;
    if (x <=400) {
        b2.style.transform = "translateX(" + (x -400) + "px)";
    } else {
        b2.style.transform = "translateX(0px)";
       
    }

   
    if (top > 1900 && top < 2400) {
        var x = 300-(top-1900) * speed2;
        b3.style.transform = "translateX(" + x + "px)";
    } else if(top>2400) {
        b3.style.transform = "translateX(0px)";
       
    }
    
    if (top > 1900 && top < 2400) {
        var x = -300+(top-1900) * speed2;
        b4.style.transform = "translateX(" + x + "px)";
    } else if(top>2400){
        b4.style.transform = "translateX(0px)";
       
    }
}