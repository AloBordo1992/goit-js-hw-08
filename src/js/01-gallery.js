import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>  
      `;
  })
  .join('');

const alleryContainerEl = document.querySelector('.gallery');
alleryContainerEl.insertAdjacentHTML('beforeend', createItemsMarkup);
let lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 1,
});
alleryContainerEl.addEventListener('click', event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
});
