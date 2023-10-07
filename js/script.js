const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to(".page-1", {
    y:"100vh",
    scale:0.4,
    duration:0,
})

tl.to(".page-1", {
    y:"0vh",
    duration: 1,
    delay: 1
     
})

tl.to(".page-1", {
    rotate: -360,
    scale: 1,
    duration: 1.3,
    delay: 1
})


