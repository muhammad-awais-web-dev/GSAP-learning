gsap.from("h1",{
  duration: 2,
  y: "-100px",
  stagger: .05,
})
gsap.from("h1 span", {
  duration: .5,
  height: "100%",
  stagger: -0.5,
});
gsap.to("#box", {
  duration: 2,
  ease:"linear",
  delay: 0,
  rotate: 360,
  repeat: -1,
});