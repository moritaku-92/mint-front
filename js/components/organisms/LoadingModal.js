import React, {PropTypes,Component} from 'react';
import {ModalContainer} from 'react-modal-dialog';
import Spinner from 'react-spinner';
import css from '../../../style/loadingModal.css'


class LoadingModal extends Component {
  constructor(props) {
  super(props);
  this.state =  {
    isShowingModal: true
   }
  }

  render() {
    const {
      props: {
        isLoading,
      },
    } = this;

    return(
      <div>
      {
        this.state.isShowingModal &&
        <ModalContainer>
          {
            this.state.isLoading ?
            <Spinner/> :
            <div className={css.loader}/>
          }
        </ModalContainer>
      }
    </div>)
  }
}

  LoadingModal.propTypes = {
    // This view takes a isLoading property
    isLoading: PropTypes.bool,
  }
export default LoadingModal