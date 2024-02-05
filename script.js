const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoconanimation()
{
    var videocon=document.querySelector("#video-container");
var playbtn=document.querySelector("#play");
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1,
    })

})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0,
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y,
    })
})
}
videoconanimation();


function loadinganimation()
{
    gsap.from("#page1 h1",{
        y:50,
        opacity:0,
        delay:0.4,
        duration:3,
        stagger:0.5,
    })
    gsap.from("#page1 span",{
        y:50,
        opacity:0,
        delay:.5,
        duration:.6,
        stagger:.2,
    })

    gsap.from("#video-container",{
        scale:0.5,
        opacity:0,
        delay:.9,
        duration:.9,
    })
}
loadinganimation();



document.addEventListener("mousemove",function(dets){
    gsap.to("#car",{
        left:dets.x,
        top:dets.y,
        scale:1,
    })
})

document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#car",{
        transform: 'translate(-50%,-50%)',
         scale:1,
    })
})

document.querySelectorAll("#child1").addEventListener("mouseleave",function(){
    gsap.to("#car",{
        scale:0,
    })
})


