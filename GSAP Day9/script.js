const menuItems = document.getElementsByClassName("menuitem");
Array.from(menuItems).forEach(item => {
    item.addEventListener("mouseenter", () => {
        // Handle mouse enter
        // use the `item` reference (arrow functions don't bind `this`)
        const overlay = item.querySelector('.overlay');
        if (!overlay) return;

        gsap.to(overlay, {
            width: "100%",
            height: "100%",
            duration: 0.3,
            borderRadius: "0%",
            ease: "power1.out"
        });
        const over = item.querySelector('.over');
        if (!over) return;

        gsap.to(over, {
            width: "100%",
            height: "100%",
            duration: 0.3,
            borderRadius: "0%",
            ease: "power1.out"
        });
    });
    item.addEventListener("mouseleave", () => {
        // Handle mouse leave - revert overlay to original state
        const overlay = item.querySelector('.overlay');
        if (!overlay) return;
        gsap.to(overlay, {
            width: "0%",
            height: "0%",
            duration: 0.25,
            borderRadius: "50%",
            ease: "power1.in"
        });
        const over = item.querySelector('.over');
        if (!over) return;
        gsap.to(over, {
            width: "0%",
            height: "0%",
            duration: 0.25,
            borderRadius: "50%",
            ease: "power1.in"
        });
    });
});