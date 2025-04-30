const ball = document.getElementById("ball");

function getRandomPosition() {
  const windowWidth = window.innerWidth - ball.offsetWidth;
  const windowHeight = window.innerHeight - ball.offsetHeight;

  const randomX = Math.random() * windowWidth;
  const randomY = Math.random() * windowHeight;

  return { x: randomX, y: randomY };
}

function moveBall() {
  const { x, y } = getRandomPosition();
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
}

// 일정 시간마다 공이 랜덤 위치로 부드럽게 이동
setInterval(moveBall, 1000);
