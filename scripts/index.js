const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const optionItem = document.querySelectorAll('.option-item');
const descriptionContainer = document.querySelectorAll(
  '.description-container'
);

console.log(optionItem);
console.log(descriptionContainer[0]);

const changeActiveDescription = (i) => {
  descriptionContainer.forEach((i) => {
    i.style.display = 'none';
  });
  descriptionContainer[i].style.display = 'flex';
};

const productItem = document.querySelectorAll('.product-item');
console.log(productItem[0].dataset.cat);

const changeActiveItem = (category) => {
  productItem.forEach((i) => {
    if (!category) {
      i.style.display = 'flex';
    } else if (i.dataset.cat == category) {
      i.style.display = 'flex';
    } else {
      i.style.display = 'none';
    }
  });
};
