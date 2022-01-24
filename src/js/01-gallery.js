// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// const SimpleLightbox = require("simplelightbox");

// Change code below this line

const divContainerRef = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}

const newGallery = galleryItems.map(item => createGalleryItem(item)).join('');
divContainerRef.insertAdjacentHTML('beforeend', newGallery);


const lightbox = new SimpleLightbox('.gallery a');
lightbox.options.captionsData = 'alt';
lightbox.options.captionDelay = 250;




// console.log(galleryItems);
