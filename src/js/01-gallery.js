import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`)

const marckup = galleryItems.map(({preview, original, description,}) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src = "${preview}"
      data-source= "${original}"
      alt= "${description}"
    />
  </a>
</div>`
).join("")

gallery.insertAdjacentHTML("beforeend", marckup)


gallery.addEventListener(`click`, choosePhoto)

function choosePhoto(e) {
    if (!e.target.classList.contains(`gallery__image`)) {
        return
    } else {

        e.preventDefault();
        const instance = basicLightbox.create(
            `<img src="${e.target.dataset.source}" alt="">`
        )

instance.show()
    }
}






























// console.log(basicLightbox);

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()