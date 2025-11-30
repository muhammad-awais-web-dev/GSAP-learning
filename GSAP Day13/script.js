document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#holder",
      start:"top 0%",
      end:"bottom -=300%",
      scrub:2,
      markers:true,
      pin:true,
    }
  });

  tl.from("#holder div", {
    y: "100vh",
    duration: 1,
    stagger: 1,
    ease: "power1.out",
  })
});
