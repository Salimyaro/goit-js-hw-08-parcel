import galleryItems from './gallery-items';
import { makeGalleryItemMarkup } from './functions';


const galleryItemsMarkup = galleryItems
.map(({ preview, original, description }, index) =>
makeGalleryItemMarkup(preview, original, description, index),
)
.join('');

export default galleryItemsMarkup;