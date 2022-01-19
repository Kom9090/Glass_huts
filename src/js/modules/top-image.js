export const topImage = () => {
  const mediaW = window.innerWidth;
  let imageUrl = mediaW > 768 ? './images/intro1.jpg' : './images/intro1-mob.jpg';
  let bgElement = document.querySelector('.bg-lazy');
  bgElement.classList.add('bg-loading');
  let preloaderImg = document.createElement('img');
  preloaderImg.src = imageUrl;
  preloaderImg.addEventListener('load', () => {
    bgElement.classList.remove('bg-loading');
    bgElement.style.backgroundImage = `url(${imageUrl})`;
    preloaderImg = null;
  });
};
