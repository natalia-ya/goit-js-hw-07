import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createitem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li>
        <a class="gallery__item" href="${original}"
            style='display: block; height: 240px'>
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', createitem);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: `250`,
  captionPosition: 'bottom',
});
