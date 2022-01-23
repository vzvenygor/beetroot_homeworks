const playList = [
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


const formatedPlayList = [];
playList.forEach((item) => formatedPlayList.push(`${item.author}: ${item.song}`));
console.log(formatedPlayList);


const displayList = document.getElementById('list');
let str = ' ';
for (i = 0; i < formatedPlayList.length; i++) {
   str = `${str += i}) ${formatedPlayList[i]} <br>`;
}

list.innerHTML = str;
