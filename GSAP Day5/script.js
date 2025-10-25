const heading = document.querySelector("#ScrollHeading");

function getwidth() {
    let width = heading.scrollWidth;
    return -(width - window.innerWidth);
}

const Tween = gsap.to("#ScrollHeading", {
    x: () => getwidth(),
    duration: 3,
    ease: "none"
});

ScrollTrigger.create({
    animation: Tween,
    trigger: "#page2",
    top : "top top",
    end : () => `+=${getwidth() * -1}`,
    scrub: 1,
    pin: true,
    markers: true,
    invalidateOnRefresh: true,
});