// Scroll background color change
document.addEventListener("scroll", () => {
    const body = document.body;
    const scrollPosition = window.scrollY;

    if (scrollPosition < 300) {
        body.style.backgroundColor = "#87CEEB"; // Biru cerah
    } else if (scrollPosition < 600) {
        body.style.backgroundColor = "yellow";
    } else if (scrollPosition < 900) {
        body.style.backgroundColor = "green";
    } else {
        body.style.backgroundColor = "purple";
    }
});

// Ball interaction
const balls = document.querySelectorAll(".ball");
let isDragging = false;
let currentBall = null;
let offsetX, offsetY;

balls.forEach(ball => {
    ball.addEventListener("mousedown", (e) => {
        isDragging = true;
        currentBall = ball;
        offsetX = e.clientX - ball.getBoundingClientRect().left;
        offsetY = e.clientY - ball.getBoundingClientRect().top;
    });
});

document.addEventListener("mousemove", (e) => {
    if (isDragging && currentBall) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        currentBall.style.left = `${x}px`;
        currentBall.style.top = `${y}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    currentBall = null;
});
