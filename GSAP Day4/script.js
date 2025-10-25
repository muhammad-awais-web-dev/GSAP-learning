var tl = gsap.timeline();


tl.from("header h1", {
    duration: 1,
    y: "-100%",
    opacity: 0,
    ease: "ease.out"
});
tl.from("header nav ul li", {
    duration: 0.5,
    y: "-100%",
    opacity: 0,
    stagger: 0.2,
    ease: "ease.out"
});