import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createitem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', createitem);

galleryContainer.addEventListener('click', openImage);

function openImage(event) {
  event.preventDefault();

  // Фильтр цели
  const targetImg = event.target.nodeName === 'IMG';
  if (!targetImg) {
    return;
  }

  const instance = basicLightbox.create(
    `<div class="modal">
      <img src = ${event.target.dataset.source}
        alt=${event.target.alt}
        width = '1140'
        height = '800'
      />
    </div> `,

    {
      onShow: instance => {
        instance.element().querySelector('img').onclick = instance.close;

        window.addEventListener('keydown', eventHandler);
      },
      onClose: instance => {
        window.removeEventListener('keydown', eventHandler);
      },
    }
  );
  function eventHandler(event) {
    if (event.key === 'Escape') {
      instance.close();
      return;
    }
  }

  instance.show();
}
