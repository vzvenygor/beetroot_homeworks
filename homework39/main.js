/*1. Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. 
На модальном вікні повинен бути текст і кнопка "Закрити". 
Спочатку модальне вікно не відображається. 
При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає. 
Також вікно зачиняється при натисканні на overlya вікна.
*/

const openModalBtn = document.querySelector(".btn-open");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".btn-close");

openModalBtn.onclick = function () {
  modal.style.display = "block";
  openModalBtn.style.display = "none";
};

closeModalBtn.onclick = function () {
  modal.style.display = "none";
  openModalBtn.style.display = "block";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

/* 2. Допрацювати код минулого домашнього завдання зі списком пісень. 
Створити форму додавання пісень, при натисканні на кнопку «додати пісню» вона додається на сторінку. 
Кожна додана пісня має мати кнопку видалити, 
при натисканні на неї відповідна пісня має бути видалена, 
із масива та сторінки.
*/

let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const setPlayList = () => {
  const list = document.querySelector(".songs-list");

  let ol = document.createElement("ol");
  list.append(ol);

  for (let i = 0; i < playList.length; i++) {
    let li = document.createElement("li");
    let button = document.createElement("button");

    li.innerText = `${playList[i].author}: ${playList[i].song}`;
    ol.append(li);
    li.appendChild(button).textContent = "Видалити";

    button.onclick = function () {
      button.parentElement.remove();
    };
  }
};

setPlayList();

const addSong = document.querySelector(".add-song");
const modalSong = document.querySelector(".modal-song");
const closeModal = document.querySelector(".modal__content_button--close");
const addBtn = document.querySelector(".modal__content_button--add");

addSong.onclick = function () {
  modalSong.style.display = "block";
};

closeModal.onclick = function () {
  modalSong.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalSong) {
    modalSong.style.display = "none";
  }
};

addBtn.onclick = function () {
  const newAuthor = document.querySelector(".modal__content_author").value;
  const newSong = document.querySelector(".modal__content_song").value;

  let ol = document.querySelector("ol");
  let li = document.createElement("li");
  let button = document.createElement("button");

  li.innerText = `${newAuthor.toUpperCase()}: ${newSong.toUpperCase()}`;
  ol.appendChild(li);
  li.appendChild(button).textContent = "Видалити";

  button.onclick = function () {
    button.parentElement.remove();
  };
};
