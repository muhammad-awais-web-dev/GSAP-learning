function splitText() {
    var text = document.querySelector("h1").textContent;
    var splited = text.split("");

    var clutteredText = "";
    var length = Math.floor(splited.length / 2);
    splited.forEach(function (char, index) {
        if (index < length) {
            clutteredText += `<span class="firstHalf">${char}</span>`;
        }
        else{
            clutteredText += `<span class="secondHalf">${char}</span>`;
        }
    });

    document.querySelector("h1").innerHTML = clutteredText;

}

splitText();

gsap.from(".firstHalf", {
    y: 40,
    duration: .8,
    stagger: 0.2
});

gsap.from(".secondHalf", {
    y: 40,
    duration: .8,
    stagger: -0.2
});