const commentAvatars = document.querySelector("#commentAvatars");

const findReview = (reviewName) => {
  const activeReview = document.querySelector(".comment.active");
  
  activeReview.classList.remove("active");

  let currentItem = document.querySelector(`.comment[data-item="${reviewName}"]`);
  
  currentItem.classList.add("active");
};

commentAvatars.addEventListener("click", (e) => {
  e.preventDefault();
  
  const target = e.target;
  if (target.classList.contains("int-avatar__image")) {
    const activeListItem = document.querySelector(".int-avatar.active");
    
    if (activeListItem) {
      activeListItem.classList.remove("active");
    }
    
    const button = target.parentElement;
    const listElement = button.parentElement;
    const id = button.getAttribute("data-link");
    listElement.classList.add("active");
    findReview(id);
  }
});