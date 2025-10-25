var initialPath = `M 50 300 Q 600 300 1150 300`;
var finalPath = `M 50 300 Q 600 300 1150 300`;

const string = document.querySelector("#string");

string.addEventListener("mouseenter", () => {

})

string.addEventListener("mouseleave", () => {
    gsap.to("svg path",{
        attr: {d: finalPath},
        duration: 1.4,
        ease: "elastic.out(1.75, 0.1)"
    })
})

string.addEventListener("mousemove", (dets) => {
    const path = `M 50 300 Q 600 ${dets.y} 1150 300`
    console.log(path);
    gsap.to("svg path",{
        attr: {d: path},
        duration: 1,
        ease: "power1.out"
    })
})