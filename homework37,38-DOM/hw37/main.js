/*
1. Створити змінні в яких повинні бути:
- всі кнопки зі сторінки;
- всі инпути зі сторінки;
- колекція посилань із футтера;
- форма із футтера;
- логотип;
- main;
- масив усіх секцій;
- меню;
- колекція всіх тегів li із меню;

2. Перебираючи масив секцій створити масив зображень які в них є.

3. Перебираючи масив зображень, вивести в консоль, текст заголовка наступної секції, у разі якщо вона є.

4. Отримати масив всіх посилань на сторінці і вивести в консоль, текст та значення атрибуту href.
*/

//1
const buttons = document.getElementsByTagName('button');
const inputs = document.getElementsByTagName('input');
const footerLinksCollection = document.querySelectorAll('footer a');
const footerForm = document.querySelectorAll('footer > form');
const logo = document.querySelector('.logo');
const main = document.querySelector('main');
const sections = document.querySelectorAll('section');
const menu = document.querySelector('nav');
const menuLiCollection = document.querySelectorAll('nav li');

/*2 Мав сумніви, як потрібно було виконати завдання, то виконав його двома способами)) 
і константа sectionsImg, і функція setImgArr дають один результат
*/
const sectionsImg = document.querySelectorAll('section img');

const setImgArr = function(data) {
    let imgArr = [];
    for (let i = 0; i < data.length; i++) {
        imgArr.push(data[i]);
    }
    return imgArr;
}

console.log(setImgArr(sectionsImg));

//3  
for (let i = 0; i < sectionsImg.length; i++) {
    const closestSection = sectionsImg[i].closest('section');

    const nextTag = closestSection.nextElementSibling;
        
    if (nextTag.tagName === 'SECTION') {
        const heading = nextTag.querySelectorAll('h1, h2, h3, h4');
    
        for (let j = 0; j < heading.length; j++) {
            console.log(heading[j].innerText);
        }
    } 
}

//4
const links = document.querySelectorAll('a');

const setAllLinksData = function(someLinks) {
    for (let i = 0; i < someLinks.length; i++) {
        console.log(`${someLinks[i].innerText}: ${someLinks[i].href}`);
    }
}
setAllLinksData(links);