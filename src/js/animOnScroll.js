export const animOnScroll = () => {
  const animItem = document.querySelector('header');
  const animContent = document.querySelector('header > div');
  const headerWrap = document.getElementById('header');

  window.addEventListener('scroll', animOnScroll);

  const animItemHeight = animItem.offsetHeight;
  const animPoint = animItemHeight / 2;

  if (window.pageYOffset > animPoint) {
    const animItemClass = animItem.classList.contains('header_animated');

    if (!animItemClass) {
      animItem.classList.add('header_animated');
      animContent.style.top = `0`;
      headerWrap.style.marginTop = `${animItemHeight}px`;

      setTimeout(() => {
        animContent.style.top = `-${animItemHeight * 0.5}px`;
        setTimeout(() => {
          animContent.style.top = `0`;
        }, 300);
      }, 100);
    }
  } else {
    animItem.classList.remove('header_animated');
    headerWrap.style.marginTop = `0`;
  }
};
