const ball1 = document.getElementById("ball1");
const ball2 = document.getElementById("ball2");
const sound = document.getElementById("sound");
const showBallCheckbox = document.getElementById("showBallCheckbox");
var isSecondBallShowed = 0;

function getRandomPosition() {
  const windowWidth = window.innerWidth - ball1.offsetWidth;
  const windowHeight = window.innerHeight - ball1.offsetHeight;

  const randomX = Math.random() * windowWidth;
  const randomY = Math.random() * windowHeight;

  return { x: randomX, y: randomY };
}

function moveBall() {
  const { x: x1, y: y1 } = getRandomPosition();
  const { x: x2, y: y2 } = getRandomPosition();
  ball1.style.left = `${x1}px`;
  ball1.style.top = `${y1}px`;
  ball2.style.left = `${x2}px`;
  ball2.style.top = `${y2}px`;
}

// 공을 터치했을 때 사운드 재생 (이미 재생 중이라도 처음부터 다시 재생)
ball1.addEventListener("click", () => {
  sound.currentTime = 0; // 사운드를 처음부터 다시 재생
  sound.play();
});

if (isSecondBallShowed) {
  ball2.addEventListener("click", () => {
    sound.currentTime = 0; // 사운드를 처음부터 다시 재생
    sound.play();
  });
}

showBallCheckbox.addEventListener("change", () => {
  if (showBallCheckbox.checked) {
    ball2.style.display = "block"; // 체크되면 두 번째 공 보이게
    isSecondBallShowed = 1;
  } else {
    ball2.style.display = "none"; // 체크 해제되면 두 번째 공 숨기기
    isSecondBallShowed = 0;
  }
});

// 일정 시간마다 공이 랜덤 위치로 부드럽게 이동
setInterval(moveBall, 1000);
