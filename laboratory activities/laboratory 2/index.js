function changeMessage() {
    document.querySelector("p").textContent = "Hello! Welcome to our webpage.";
}

document.getElementById("msg").addEventListener("click", changeMessage);


function changeColor() {
    document.querySelector("div").style.backgroundColor = "#f8afbe";
    document.querySelectorAll("button").forEach(button => {
        button.style.backgroundColor = "#f8afbe";
    });
}

document.getElementById("bg").addEventListener("click", changeColor);
