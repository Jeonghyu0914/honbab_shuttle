// Smooth scroll function
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

const smoothScroll = (event, targetId) => {
  event.preventDefault();

  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const isNotMain = target.id == "main" ? 0 : 64;

  const distance = targetPosition - startPosition - isNotMain;
  let startTime = null;
  const duration = 2000; // 스크롤 지속 시간 (2초)

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // 0 ~ 1 값 유지
    const easeProgress = easeInOutQuad(progress); // 점점 빨라졌다가 느려지는 효과 적용
    window.scrollTo(0, startPosition + distance * easeProgress);

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export default smoothScroll;
