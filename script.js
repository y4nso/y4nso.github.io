
document.getElementById('codeInput')?.addEventListener('click', function(event) {
    createCaca(event.pageX, event.pageY);
});

document.addEventListener('click', function(event) {
    if (event.target.id !== 'codeInput') {
        createCaca(event.pageX, event.pageY);
    }
});

function createCaca(x, y) {
    const caca = document.createElement("div");
    caca.className = "caca";
    caca.style.left = `${x}px`;
    caca.style.top = `${y}px`;
    caca.textContent = "💩";
    document.body.appendChild(caca);

    setTimeout(() => {
        caca.remove();
    }, 2000);
}

// Validation functions
function validateCode() {
    const code = document.getElementById("codeInput").value;
    if (code === "JOYEUX") {
        window.location.href = "page2.html";
    } else {
        alert("Code incorrect !");
    }
}

function validateCode2() {
    const code = document.getElementById("codeInput2").value;
    if (code === "25948") {
        window.location.href = "page3.html";
    } else {
        alert("Code incorrect !");
    }
}

function validateCode3() {
    const code = document.getElementById("codeInput3").value;
    if (code === "255") {
        window.location.href = "page4.html";
    } else {
        alert("Code incorrect !");
    }
}
