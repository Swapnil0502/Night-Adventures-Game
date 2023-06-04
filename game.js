
function startGame(){
    let startDiv=document.getElementById("start");
    let gameContainer=document.getElementById("gameCont");
    let name=document.getElementById("name");
    gameContainer.style.display="block";
    name.style.display="none";
    startDiv.style.display="none";
    audio = new Audio('game music/music.mp3');
    setTimeout(() => {
        audio.play()
    }, 1000);
    }
score = 0;
cross = true;


audiogo = new Audio('game music/gameover.mp3');

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 73 && offsetY < 52) {
      gmeOver();
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
    
}

 function gmeOver(){
   let GameOvr=document.getElementById("GameOver");
   let GameCan=document.getElementById("GameCan");
   let gameContainer=document.getElementById("gameCont");
   gameOver.innerHTML="GAME OVER";
   gameOver.style.marginLeft="65px";
   obstacle.classList.remove('obstacleAni')
   dino.classList.remove('dino')
   GameOvr.style.display="block";
   GameCan.style.display="block";
   gameContainer.style.display="block";
   audiogo.play();
       setTimeout(() => {
         audiogo.pause();
            audio.pause();
         }, 1000);
    }
 