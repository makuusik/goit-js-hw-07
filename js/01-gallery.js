import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}">
      </a>
    </li>
  `;
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

const galleryMarkup = galleryItems.map(createGalleryItem).join("");
galleryList.innerHTML = galleryMarkup;

galleryList.addEventListener("click", handleGalleryClick);
