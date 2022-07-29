import PropTypes from 'prop-types';
import ButtonModul from './Button.module.css'
export const Button = ({handelLoadMore}) => {
	return (
		<div className={ButtonModul.position}>
		  <button className="Button" type='button' onClick={handelLoadMore}>
			  Load more
		  </button>
		</div>
	)
}
Button.propsTypes = {
	handelLoadMore: PropTypes.func.isRequired
}