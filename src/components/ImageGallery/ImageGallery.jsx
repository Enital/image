import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './imageGallery.module.css';

export default function ImageGallery({images}) {
    return (
        <ul className={css.gallery}>
            {images.map(image => {
                return (
                    <li key={images.id } className={css.item}>
                        <ImageGalleryItem image={image} />
                    </li>
                )
            })}
        </ul>
    )
}