const footerButton = document.querySelector('.menu-burger__button');
const footerPopup = document.querySelector('.burger-menu');
const footerSocial = document.querySelector('.footer__column_content_social');
const footerInfo = document.querySelector('.footer__column_content_info');
const commentTemplate = document.querySelector('.comment').content.querySelector('.comment__conteiner');
const commentForm = document.querySelector('.form');
const nameImput = document.querySelector('.form__item_el_username');
const textImput = document.querySelector('.form__item_el_comment');
const buttonSubmit = document.querySelector('.button-submit');
const buttonReset = document.querySelector('.button-reset');
const commentContainer = document.querySelector('.comments');


function openBurgerMenu () {
  footerPopup.classList.toggle('footer__column_active');
  footerSocial.classList.toggle('footer__column_active');
  footerInfo.classList.toggle('footer__column_active');
  footerButton.classList.toggle('menu-burger__button_active');
  document.querySelector('.menu-burger__span').classList.toggle('menu-burger__span_active');
};

footerButton.addEventListener('click', openBurgerMenu);

function createComment(userName, text) {
  const comment = commentTemplate.cloneNode(true);
  const commentName = comment.querySelector('.comment__user-name');
  const commentText = comment.querySelector('.comment__text');
  const commentLike = comment.querySelector('.comment__like');
  const commentDisLike = comment.querySelector('.comment__dis-like');

  commentName.textContent = userName;
  commentText.textContent = text;

  function likeComment() {
    if (commentDisLike.classList.contains('comment__dis-like_active')) {
      commentDisLike.classList.remove('comment__dis-like_active');
      commentLike.classList.toggle('comment__like_active');
    } else {
      commentLike.classList.toggle('comment__like_active');
    };
  };
  commentLike.addEventListener('click', likeComment);

  function disLikeComment() {
    if (commentLike.classList.contains('comment__like_active')) {
      commentLike.classList.remove('comment__like_active');
      commentDisLike.classList.toggle('comment__dis-like_active');
    } else {
      commentDisLike.classList.toggle('comment__dis-like_active');
    };
  };
  commentDisLike.addEventListener('click', disLikeComment);

  return comment;
};

function submitFormHandlerComment(evt) {
  evt.preventDefault();
  renderComment(nameImput.value, textImput.value);
  commentForm.reset();
};

function renderComment(userName, text) {
  const newComment = createComment(userName, text);
  commentContainer.prepend(newComment);
};

commentForm.addEventListener('submit', submitFormHandlerComment);