const preloadImage = img => {
  const src = img.getAttribute("data-src");
  console.log(src);
  if (!src) return;
  img.src = src;
};

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 30px 10px 0px",
};
const lazyLoadImg = () => {
  console.log("called");
  const images = document && document.querySelectorAll("[data-src].lazyload");
  if (!images) return;

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.remove("lazyload");
      entry.target.classList.add("lazyloaded");
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    });
  }, imgOptions);

  images.forEach(image => {
    imgObserver.observe(image);
  });
};
export default () => {
  window.addEventListener("DOMContentLoaded", lazyLoadImg, false);
};
