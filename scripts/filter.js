const optionItem = document.querySelectorAll('.option-item');
const descriptionContainer = document.querySelectorAll(
  '.description-container'
);

// console.log(optionItem);
// console.log(descriptionContainer[0]);

const changeActiveDescription = (i) => {
  descriptionContainer.forEach((i) => {
    i.style.display = 'none';
  });
  descriptionContainer[i].style.display = 'flex';
};

const productItem = document.querySelectorAll('.product-item');
// console.log(productItem[0].dataset.cat);

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
