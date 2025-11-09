window.onload =function() {
    alert("Welcome to Mmakgadi's Portfolio Website!");

} // an alert box that welcomes users to the portfolio website when it loads




const name = document.getElementById('myName');
    name.addEventListener("mouseover", () => {
        name.textContent = "✨ Mmakgadi's ✨";
    });

    name.addEventListener("mouseout", () => {
        name.textContent = "Mmakgadi's";
    });

// an event listener that adds sparkle emojis to the name when hovered over




