import { Component } from "react";
import PropTypes from 'prop-types';

export class Modal extends Component {

	componentDidMount() {
		window.addEventListener('keydown', this.handelCloseModal);
		window.addEventListener('click', this.handelCloseModal);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handelCloseModal);
		window.removeEventListener('click', this.handelCloseModal);
	}
	
	handelCloseModal = (event) => {
		if(event.code === 'Escape' || event.target.className === 'Overlay') {
			this.props.onClose();
		}
	}
	render() {
		const { imgBigItem } = this.props;
  	return (
    		<div className="Overlay">
      		<div className="Modal">
        		<img src={imgBigItem.largeImageURL} alt={imgBigItem.tags} />
      		</div>
    		</div>
  	);
	}
};
Modal.propsTypes = {
	onClose: PropTypes.func.isRequired,
	imgBigItem: PropTypes.shape({
		largeImageURL: PropTypes.string.isRequired,
		tags: PropTypes.string.isRequired,
	})
}
