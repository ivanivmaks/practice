import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;
  link.addEventListener("click", openImg);

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.dataset.source = original;
  img.alt = description;

  galleryItem.appendChild(link);
  link.appendChild(img);

  gallery.append(galleryItem);
});

function openImg(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => document.addEventListener("keydown", handleKeyPress),
      onClose: () => document.removeEventListener("keydown", handleKeyPress),
    }
  );
  instance.show();

  function handleKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
