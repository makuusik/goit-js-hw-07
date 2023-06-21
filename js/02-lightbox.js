import { galleryItems } from "./gallery-items.js";
const galleryList = document.querySelector(".gallery");

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

const styles = `
  .slbContentOuter .slbArrow.slbArrow--left {
    left: 10px;
  }
  .slbContentOuter .slbArrow.slbArrow--right {
    right: 10px;
  }
  .slbContentOuter .slbOverlay {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);
