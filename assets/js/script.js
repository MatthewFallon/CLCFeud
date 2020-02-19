window.onload = (e) => {
    setEvents();
};

function setEvents() {
    document.addEventListener("keyup", keyboardIn);
    document.getElementById("menu").addEventListener("change", changePage)
    answerEvents();
}

function answerEvents() {
    let answers = document.getElementsByClassName("answer");
    for (let a of answers) {
        let cover = a.getElementsByClassName("cover").item(0);
        if (cover) {
            cover.addEventListener("click", mouseClick)
        }
    }
}

function mouseClick(event) {
    let cover = event.target.parentElement;
    if (cover.classList.contains("cover") && !(cover.classList.contains("hidden"))) {
        cover.classList.toggle("hidden")
    }
}

function changePage(event) {
    window.location.href = event.target.value;
}

function keyboardIn(event) {
    let answers = document.getElementsByClassName("answer");
    for (let i = 0; i < answers.length; i++) {
        let a = answers.item(i);
        if (event.key === (i+1).toString() || event.key === "0" && (i+1) === 10) {
            let cover = a.getElementsByClassName("cover").item(0);
            if (cover) {
                if (!(cover.classList.contains("hidden"))) {
                    cover.classList.toggle("hidden")
                }
            }
        }
    }
    if (event.key === "r") {
        for (let i = 0; i < answers.length; i++) {
            let a = answers.item(i);
            let cover = a.getElementsByClassName("cover").item(0);
            if (cover) {
                if (cover.classList.contains("hidden")) {
                    cover.classList.toggle("hidden")
                }
            }
        }
    }
    if (event.key === "e") {
        for (let i = 0; i < answers.length; i++) {
            let a = answers.item(i);
            let cover = a.getElementsByClassName("cover").item(0);
            if (cover) {
                if (!(cover.classList.contains("hidden"))) {
                    cover.classList.toggle("hidden")
                }
            }
        }
    }
    if (event.key === "ArrowLeft") {
        let prev = document.getElementById("prev");
        if (prev) {
            document.location.href = prev.getAttribute("href");
        }
    }
    if (event.key === "ArrowRight") {
        let next = document.getElementById("next");
        if (next) {
            document.location.href = next.getAttribute("href");
        }
    }
    if (event.key === " ") {
        let menu = document.getElementById("menu");
        menu.focus();
    }
}