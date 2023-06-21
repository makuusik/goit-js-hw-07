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
  image.dataset.source = item.original;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function handleGalleryClick(event) {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== "IMG") {
    return;
  }

  const largeImageUrl = target.dataset.source;

  openModal(largeImageUrl);
}

function openModal(url) {
  const modalContent = `<img src="${url}" width="800" height="600">`;

  const modal = basicLightbox.create(modalContent);
  modal.show();
}

galleryItems.forEach(function (item) {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

galleryList.addEventListener("click", handleGalleryClick);
