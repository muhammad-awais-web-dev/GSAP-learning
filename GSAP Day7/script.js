var cursor = document.getElementById("cursor");
var main = document.getElementById("main");

main.addEventListener("mousemove", function(e){
    gsap.to(cursor, {
        x: e.x - cursor.offsetWidth / 2,
        y: e.y - cursor.offsetHeight / 2,
        duration: 0.5,
        ease: "back.out"
    })
})
document.getElementById("image").addEventListener("mouseenter", function(e){
    gsap.to(cursor, {
        delay: 0.3,
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
        color: "black",
        backgroundColor: "#fff4"
    })
    gsap.to("#cursor img", {
        duration: 0.3,
        width: "15px",
        opacity: 1,
    })
    gsap.to("#cursor img", {
        rotate: -45,
        duration: 0.3,
        delay:0.3
    })

})
document.getElementById("image").addEventListener("mouseleave", function(e){
    gsap.to(cursor, {
        delay: 0.3,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        color: "transparent",
        backgroundColor: "#fff"
    })
    gsap.to("#cursor img", {
        rotate: 0,
        width: "12px",
        duration: 0.3,
    })
    gsap.to("#cursor img", {
        delay: 0.3,
        duration: 0.3,
        opacity: 0,
    })
})