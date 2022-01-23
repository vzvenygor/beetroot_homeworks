let modal = document.querySelector('.modal__window');
let modalBtnOpen = document.querySelector('.modal__btn');
let modalBtnClose = document.querySelector('.modal__window_btn');

modalBtnOpen.onclick = function() {
    modal.style.display = 'block';
    modalBtnOpen.style.visibility = 'hidden';
};

modalBtnClose.onclick = function() {
    modal.style.display = 'none';
    modalBtnOpen.style.visibility = 'visible ';
};
