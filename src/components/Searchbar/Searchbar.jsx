import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Style from '../../components/Searchbar/Searchbar.module.css'
export class Searchbar extends Component {
  state = {
		query: '',
	}

	clearQuery = () => {
		this.setState({query: ''})
		document.getElementById('form').reset();
	}

	handeleChange = event => {
		this.setState({query: event.target.value})
	}
	handelSubmit = event => {
		event.preventDefault();
		if(this.state.query.trim() === ''){
			toast.error('Fill input')
			return 
		}
		const { onSubmit } = this.props;
		onSubmit(this.state.query)
		this.clearQuery()
	}
	
	render() {
    return (
      <header className={Style.Searchbar}>
        <form className={Style.SearchForm} id='form'>
          <button
            type="submit"
            className={Style.SearchFormButton}
            onClick={this.handelSubmit}
          >
            <span className={Style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
						onChange={this.handeleChange}
            className={Style.SearchFormInput}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}
Searchbar.propsTypes = {
	onSubmit: PropTypes.func.isRequired,
}