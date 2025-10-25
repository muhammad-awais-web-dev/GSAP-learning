
gsap.to("#Box",{
    backgroundColor: "white",
    x: 400,
    borderRadius: "10px",
    scrollTrigger:{
        trigger: "#page1",
        start: "top 0%",
        end: "bottom 100%",
        scrub: true,
        // markers: true
    }
})
gsap.to("#Box",{
    scaleY:2,
    scrollTrigger:{
        trigger: "#page2",
        start: "top 0%",
        end: "bottom 100%",
        scrub: true,
        // markers: true
    }
})
gsap.to("#Box",{
    scaleX:3,
    y:0,
    scrollTrigger:{
        trigger: "#page2",
        start: "top 0%",
        end: "bottom 100%",
        scrub: true,
        // markers: true
    }
})