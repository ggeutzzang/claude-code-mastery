/**
 * Developer Web Resume - Main JavaScript
 * 스크롤 애니메이션, 스크롤 상단 이동 버튼 등 인터랙티브 기능 구현
 */

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initScrollToTop();
  initSmoothScroll();
});

/**
 * Intersection Observer를 사용한 스크롤 트리거 페이드인 애니메이션
 */
function initScrollAnimations() {
  // Observer 설정
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // 뷰포트에 진입할 때 실행되는 콜백
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        // 애니메이션 후 unobserve하여 성능 향상
        observer.unobserve(entry.target);
      }
    });
  };

  // Observer 생성
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // 애니메이션을 적용할 요소 선택
  const animatedElements = document.querySelectorAll('section, .card');

  // 각 요소 관찰 시작
  animatedElements.forEach(element => {
    element.classList.add('opacity-0');
    observer.observe(element);
  });
}

/**
 * 상단으로 스크롤 버튼 기능
 */
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('scrollToTop');

  if (!scrollToTopBtn) {
    console.warn('Scroll to top button not found');
    return;
  }

  // 스크롤 위치에 따라 버튼 표시/숨김
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.remove('opacity-0', 'invisible');
      scrollToTopBtn.classList.add('opacity-100', 'visible');
    } else {
      scrollToTopBtn.classList.remove('opacity-100', 'visible');
      scrollToTopBtn.classList.add('opacity-0', 'invisible');
    }
  };

  // 상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 이벤트 리스너 등록
  window.addEventListener('scroll', handleScroll);
  scrollToTopBtn.addEventListener('click', scrollToTop);

  // 초기 상태 설정
  handleScroll();
}

/**
 * 앵커 링크 부드러운 스크롤
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // "#"만 있거나 비어있으면 스킵
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
