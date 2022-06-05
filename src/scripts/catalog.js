(()=>{

const catalog = document.querySelector("#horizontalCatalog");
const items = document.querySelectorAll(".catalog__item");
const getItemWidth = (item) => {
  let resultWidth = 524;

  const windowWidth = window.innerWidth;
  const itemWidth = item.offsetWidth;

  const isTablet = window.matchMedia('(max-width: 768px)').matches;
  const isMobile = window.matchMedia('(max-width: 480px)').matches;

  if (isTablet) {
    resultWidth = windowWidth - itemWidth * items.length;
  }
  if (isMobile) {
    resultWidth = windowWidth - itemWidth;
  } 

  return resultWidth;
};

const openItem = (item) => {
  const itemParent = item.parentElement;
  itemParent.classList.add('catalog__item--active');
  item.classList.add('catalog__button--active');

  const itemContent = item.nextElementSibling;
  const itemText = itemContent.firstElementChild;
  itemContent.style.width = `${getItemWidth(item)}px`;
  itemText.style.width = `${getItemWidth(item)}px`;
};

const closeItem = (item) => {
  if (!item) return;
  const itemParent = item.parentElement;
  itemParent.classList.remove('catalog__item--active');
  item.classList.remove('catalog__button--active');

  const itemContent = item.nextElementSibling;
  itemContent.style.width = 0;
};

catalog.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  const isActive = target.classList.contains("catalog__button--active");
  const activeElement = document.querySelector(".catalog__button--active");

  if (target.classList.contains('catalog__button') && isActive && activeElement) {
    console.log('isActive && activeElement', isActive, activeElement);
    closeItem(target);
  }

  if (target.classList.contains('catalog__button') && !isActive) {
    closeItem(activeElement);
    openItem(target);
  }

});

window.addEventListener('resize', () => {
  const activeElement = document.querySelector(".catalog__button--active");
  if (activeElement) {
    closeItem(activeElement);
  }
});

})()