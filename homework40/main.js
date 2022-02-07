//1
const changeText = document.getElementById('text');
const textarea = document.getElementById('edit');
textarea.style.display = 'none';

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.code === 'KeyE') {        
        e.preventDefault();
        changeText.style.display = 'none';
        textarea.style.display = 'block';
        textarea.value = changeText.innerText;
    }
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.code === 'Equal') {        
        e.preventDefault();
        changeText.style.display = 'block';
        textarea.style.display = 'none';
        changeText.innerText = textarea.value;
    }
});

//2
const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];
const columns = [...document.querySelectorAll('th')];

for (let column of columns) {
    column.addEventListener('click', sortTable);
}

function sortTable() {
    let i = columns.indexOf(this);
    rows.sort((a, b) => a.cells[i].innerText > b.cells[i].innerText ? 1 : -1) ;
    for (let row of rows) tbody.appendChild(row);
}

/*3 Не зміг зробити це завдання. 
Списувати не хочу, бо приклади, які знайшов, складні, 
а я хотів би зрозуміти і самостійно реалізувати((
*/
const divWithText = document.querySelector('.change-size');

const setCoordinates = function(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    console.log(x, y);
    document.onmousemove = () => {
        x = e.clientX;
        y = e.clientY;
    }
    document.onmouseup = () => {
        divWithText.style.width = `${x}px`;
        divWithText.style.height = `${y}px`;
    }
}

divWithText.addEventListener('mousedown', setCoordinates);
