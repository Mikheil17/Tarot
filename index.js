console.log("Ultraviolence")
const tarotDeck = [
    { title: "Born to Die", meaning: "Melancholy beauty. Transormation ahead."},
    { title: "Ultraviolence", meaning: "Beauty in the suffering. Stay strong." }
];
function randomTarot() {
    let ranNum = Math.floor(Math.random() * tarotDeck.length);
    return tarotDeck[ranNum];
}

document.querySelector("button").addEventListener("click", function() {
    document.querySelector("button").classList.add("hidden");

    const tarotDiv = document.getElementsByClassName("tarot")[0];
    tarotDiv.classList.toggle("hidden");
    tarotDiv.play();

});
