document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#Container",
      start: "top top",
      end: "bottom -=200%",
      scrub: true,
      markers: true,
      pin: true,
    },
  });
  tl.set("#Container div", { height: "5vh" });
  tl.to("#Container div", {
    height: "9vh",
    stagger: {
        amount: -1
    },
    ease: "power1.inOut",
  });
  tl.set("#Container", { flexDirection: "column" });
  tl.to("#Container div", {
    height: "5vh",
    stagger: {
        amount: -1
    },
    ease: "power1.inOut",
  }, "<");
});
