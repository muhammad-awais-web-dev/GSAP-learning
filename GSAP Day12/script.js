document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#Container',
      start: 'center center',
      end: 'bottom -=400%',
      scrub: true,
      markers: true,
      pin: true,
    }
  });

  tl.to('#Container div', {
    height: '75vh',
    duration: 1,
    stagger: 1,
    ease: "power1.inOut",
  }).to('#Container div', {
    delay: 1,
    yPercent: 5,
    height: '5vh',
    duration: 1,
    stagger: 1,
    ease: "power1.inOut",
  }, '<');
  


});
