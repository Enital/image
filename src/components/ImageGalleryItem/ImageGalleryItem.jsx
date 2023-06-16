import css from './imageGalleryItem.module.css'

export default function ImageGalleryItem({image}) {
    console.log(image);
    return (
            <img className={css.image} src={image.webformatURL} alt="" />
    )
}