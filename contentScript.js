console.log(`Content script is running`);

const fileNames = [
  'images/cat-1.jpg',
  'images/cat-2.jpg',
  'images/cat-3.jpg',
  'images/cat-4.jpg',
  'images/cat-5.jpg',
  'images/cat-6.jpg',
];

let images = document.getElementsByTagName('img');

for (let img of images) {
  let randomCatImage = fileNames[Math.floor(Math.random() * fileNames.length)];
  img.src = chrome.runtime.getURL(randomCatImage);
}
