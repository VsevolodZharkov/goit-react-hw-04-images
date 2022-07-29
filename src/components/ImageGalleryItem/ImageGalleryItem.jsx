import Style from '../../components/ImageGalleryItem/ImageGalleryItem.module.css'
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({image, onClick}) => {

	return (
			<li className={Style.ImageGalleryItem} onClick={() =>onClick(image)}>
  			<img className={Style.ImageGalleryItemImage} src={image.webformatURL} alt={image.tags} />
			</li>
		)
	}	

ImageGalleryItem.propsTypes = {
	onClick: PropTypes.func.isRequired,
	image: PropTypes.shape({
		webformatURL: PropTypes.string.isRequired,
		tags: PropTypes.string.isRequired,
	}),
}