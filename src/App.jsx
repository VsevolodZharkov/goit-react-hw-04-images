import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Modal } from './components/Modal/Modal';
import { useState, useEffect } from 'react';
import { Button } from './components/Button/Button';
import { STATUS } from './Status/Status';
import { ToastContainer } from 'react-toastify';
import { Fetch } from './Fecth/Fetch';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(STATUS.Idle);
  const [page, setPage] = useState(1);// use
  const [totalHits, setTotalHits] = useState(null);
  const [imgBigItem, setImgBigItem] = useState({});

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus(STATUS.Loading);
    Fetch(query, page)
      .then(responce => {
        setImages(responce.hits);
				setStatus(STATUS.Success)
				setTotalHits(responce.totalHits)
      })
      .catch(() => {
        setStatus(STATUS.Error);
      });
  }, [query]);

  const handelLoadMore = () => {
    Fetch(query, page + 1)
		.then(responce => { 
			setPage(ps => ps + 1);
			setImages(ps => [...ps, ...responce.hits])
		})
		.catch(() => {
			setStatus(STATUS.Error);
		});
	}

  const handelSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  const openModal = imgBig => {
    setIsOpen(ps => !ps);
    setImgBigItem(imgBig);
  };

  const onClose = () => {
    setIsOpen(ps => !ps);
		console.log('in App');
  };

  return (
    <div>
      <Searchbar onSubmit={handelSubmit} />
      <ToastContainer />
      <ImageGallery openModal={openModal} images={images} status={status} />
      {status === STATUS.Loading
        ? ''
        : !!totalHits &&
          totalHits >= page * 12 && (
            <Button handelLoadMore={handelLoadMore} />
          )}
      {isOpen && <Modal imgBigItem={imgBigItem} onClose={onClose} />}
    </div>
  );
};
// export class oldApp extends Component {
//   state = {
//     images: [],
//     query: '',
//     isOpen: false,
//     status: STATUS.Idle,
//     page: 1,
//     totalHits: null,
//     imgBigItem: {},
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.query !== this.state.query
//       // || prevState.page !== this.state.page
//     ) {
//       this.setState({ status: STATUS.Loading });

//       Fetch(this.state.query, this.state.page)
//         .then(data => {
//           this.setState({
//             images: data.hits,
//             status: STATUS.Success,
//             totalHits: data.totalHits,
//           });
//         })
//         .catch(() => {
//           this.setState({ status: STATUS.Error });
//         });
//     }
//   }

  // handelLoadMore = () => {
	// 	this.setState(prevState => ({ page: prevState.page + 1 }));
  //   Fetch(this.state.query, this.state.page + 1)
	// 	.then(responce => { this.setState(ps => ({
  //       images: [...ps.images, ...responce.hits],
  //     }))
  //   })
	// 	.catch(() => {
	// 		this.setState({ status: STATUS.Error });
	// 	});

//   };

//   handelSubmit = query => {
//     this.setState({ query, page: 1 });
//   };

//   openModal = imgBig => {
//     this.setState(prevDtate => ({ isOpen: !prevDtate.isOpen }));
//     this.setState({ imgBigItem: imgBig });
//   };

//   onClose = () => {
//     this.setState(prevDtate => ({ isOpen: !prevDtate.isOpen }));
//   };

//   render() {
//     const { page, totalHits, isOpen, status } = this.state;

//     return (
//       <div>
//         <Searchbar onSubmit={this.handelSubmit} />
//         <ToastContainer />
//         <ImageGallery
//           openModal={this.openModal}
//           images={this.state.images}
//           status={this.state.status}
//         />
//         {status === STATUS.Loading
//           ? ''
//           : !!totalHits &&
//             totalHits >= page * 12 && (
//               <Button handelLoadMore={this.handelLoadMore} />
//             )}
//         {isOpen && (
//           <Modal imgBigItem={this.state.imgBigItem} onClose={this.onClose} />
//         )}
//       </div>
//     );
//   }
// }
