var cursor = document.getElementById("cursor");
var main = document.getElementById("main");

main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x - cursor.offsetWidth / 2,
    y: e.y - cursor.offsetHeight / 2,
    duration: 0.5,
    ease: "back.out",
  });
});

Array.from(document.getElementsByClassName("image")).forEach(function (image) {
  image.addEventListener("mouseenter", function (e) {
    overText = this.querySelector(".projectName").innerText;
    document.getElementById("text").innerText = overText;
    gsap.to(cursor, {
      delay: 0.3,
      scale: 2,
      width: "40px",
      height: "40px",
      duration: 0.3,
      ease: "power2.out",
      boxShadow:
        "inset 2px 2px 15px rgba(135, 135, 135, .1), 2px 2px 18px 3px rgba(0, 0, 0, .3)",
      color: "black",
      backgroundColor: "#fff4",
    });
    gsap.to("#cursor img", {
      duration: 0.3,
      rotate: -45,
      width: "15px",
      opacity: 1,
    });
  });
});

Array.from(document.getElementsByClassName("image")).forEach(function (image) {
  image.addEventListener("mouseleave", function (e) {
    gsap.to(cursor, {
      delay: 0.3,
      scale: 1,
      width: "30px",
      height: "30px",
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "none",
      color: "transparent",
      backgroundColor: "#fff",
    });
    gsap.to("#cursor img", {
      rotate: 0,
      width: "12px",
      duration: 0.3,
      opacity: 0,
    });
  });
});
