var tl = gsap.timeline();

tl.from("header", {
    duration: 1,
    y: "-100%",
    opacity: 0,
    ease: "bounce.out"
});
tl.from("header h1", {
    duration: 1,
    y: "-100%",
    opacity: 0,
    ease: "bounce.out"
});
tl.from("header nav ul li", {
    duration: 0.5,
    y: "100%",
    opacity: 0,
    stagger: 0.2,
    ease: "bounce.out"
});