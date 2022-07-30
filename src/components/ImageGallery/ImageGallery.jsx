import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Spiner } from '../Loader/Loader';
import { STATUS } from '../../Status/Status';
import PropTypes from 'prop-types';
import Style from '../../components/ImageGallery/ImageGallery.module.css'

export const ImageGallery = ({images, openModal, status}) => {

    if (status === STATUS.Idle) {
      return <p className={Style.TextForUser}>Enter which photos you are interested in.</p>
    }

    if (status === STATUS.Loading) {
      return (
        <>
          <Spiner />
        </>
      );
    }

    if (status === STATUS.Error) {
      return <p className={Style.TextForUserError}>Error!</p>;
    }

    return (
      <>
        <ul className={Style.ImageGallery}>
          {images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                image={image}
                onClick={openModal}
              />
            );
          })}
        </ul>
      </>
    );
}


// export class oldImageGallery extends Component {
	
//   render() {
//     const { status } = this.props;
//     if (status === STATUS.Idle) {
//       return <p className={Style.TextForUser}>Enter which photos you are interested in.</p>
//     }

//     if (status === STATUS.Loading) {
//       return (
//         <>
//           <Spiner />
//         </>
//       );
//     }

//     if (status === STATUS.Error) {
//       return <p className={Style.TextForUserError}>Error!</p>;
//     }

//     return (
//       <>
//         <ul className={Style.ImageGallery}>
//           {this.props.images.map(image => {
//             return (
//               <ImageGalleryItem
//                 key={image.id}
//                 image={image}
//                 onClick={this.props.openModal}
//               />
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// }
ImageGallery.propsTypes = {
	status: PropTypes.string.isRequired,
	images: PropTypes.array.isRequired,
	openModal:  PropTypes.func.isRequired,
}