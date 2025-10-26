const menuItems = document.getElementsByClassName("menuitem");
Array.from(menuItems).forEach(item => {
    const overlay = item.querySelector('.overlay');
    if (!overlay) return;

    var tl1 = gsap.timeline({paused: true});
    tl1.to(overlay, {
            width: "100%",
            height: "100%",
            duration: 0.3,
            borderRadius: "0%",
            ease: "power1.out"
        });
        const over = item.querySelector('.over');
        if (!over) return;

        tl1.to(over, {
            width: "100%",
            height: "100%",
            duration: 0.3,
            borderRadius: "0%",
            ease: "power1.out"
        }, "-=0.3");
    item.addEventListener("mouseenter", () => {
        tl1.play();
    });
    item.addEventListener("mouseleave", () => {
        tl1.reverse();
    });
});

const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const menuItemsContainer = document.getElementById("menuitems");

var tl = gsap.timeline({paused: true,});

tl.to("#menuitems", {
    y: "100vh",
    duration: .5,
    ease: "power1.out"
});
tl.from("#menuitems .menuitem", {
    y: "-100vh",
    duration: .5,
    ease: "power1.out",
    stagger: 0.1
}, "-=0.1");

openButton.addEventListener("click", () => {
    tl.play();
    console.log("Menu Opened");
});

closeButton.addEventListener("click", () => {
    tl.reverse();
});