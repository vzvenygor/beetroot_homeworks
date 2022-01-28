//1.Створити сторінку, що показує нумерований список пісень:

var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];

const list = document.querySelector('.songs-list');

let ol = document.createElement('ol');
list.append(ol);

for (let i = 0; i < playList.length; i++) {
    let li = document.createElement('li');
    li.innerText = `${playList[i].author}: ${playList[i].song}`;
    ol.append(li);
}

//2. Створити метод, якій додає нову пісню в масив і на сторінку.
const addSong = document.querySelector('.add-song');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__content_button--close');
const addBtn = document.querySelector('.modal__content_button--add');


addSong.onclick = function() {
    modal.style.display = 'block';
};

closeModal.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
};

addBtn.onclick = function() {
    const newAuthor = document.querySelector('.modal__content_author').value;
    const newSong = document.querySelector('.modal__content_song').value;

    let ol = document.querySelector('ol');
    let li = document.createElement('li');
    li.innerText = `${newAuthor.toUpperCase()}: ${newSong.toUpperCase()}`;
    ol.appendChild(li);
    playList.push(
        {
            author: newAuthor,
            song: newSong
        }
    )
};

//3. Створити метод, якій видаляє пісню із масива і зі сторінки.
const removeSong = document.querySelector('.remove-song');

removeSong.onclick = function() {
    let item = ol.lastChild;
    if (item != null) {
        ol.removeChild(item);
        playList.pop(item);
    }
};

//4.Створити HTML-сторінку зі світлофором. Світлофор перемикається на наступний колір кожні 2с.
const colors = document.querySelectorAll('.traffic-lights__item');
console.log(colors);
let activeLight = 0;

setInterval(() => {
    switchColor();
}, 2000);

function switchColor() {
    colors[activeLight].className = 'traffic-lights__item';
    activeLight++;

    if (activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = colors[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
}

