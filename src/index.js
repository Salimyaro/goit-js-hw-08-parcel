import galleryItemsMarkup from './js/render';
import refs from './js/refs'
import {
  galleryClickCb,
  lightboxClickCb,
} from './js/functions';

refs.gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

refs.gallery.addEventListener('click', galleryClickCb);
refs.lightbox.addEventListener('click', lightboxClickCb);
