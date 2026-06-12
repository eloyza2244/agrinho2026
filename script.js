const player = document.getElementById("player");
const item = document.getElementById("item");
const scoreText = document.getElementById("score");

let score = 0;
let x = 350;
let y = 400;

document.addEventListener("keydown", (e) => {

    if(e.key === "ArrowLeft") x -= 20;
    if(e.key === "ArrowRight") x += 20;
    if(e.key === "ArrowUp") y -= 20;
    if(e.key === "ArrowDown") y += 20;

    player.style.left = x + "px";
    player.style.top = y + "px";

    verificarColisao();
});

function verificarColisao(){

    const p = player.getBoundingClientRect();
    const i = item.getBoundingClientRect();

    if(
        p.left < i.right &&
        p.right > i.left &&
        p.top < i.bottom &&
        p.bottom > i.top
    ){
        score++;
        scoreText.textContent = score;

        item.style.left =
            Math.random() * 700 + "px";

        item.style.top =
            Math.random() * 400 + "px";
    }
}