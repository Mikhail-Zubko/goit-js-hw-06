const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Green Tree ',
  },
  {
    url: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg',
    alt: 'Gray Bridge and Trees',
  },

];


const list = document.querySelector(".gallerys");

const galleryList = images
  .map(({ url, alt }) => `<li class ="item gallery__item"><img src =${url} alt=${alt} width='350'></img></li>`
  ).join("")

console.log(galleryList);

list.insertAdjacentHTML("beforeend", galleryList);