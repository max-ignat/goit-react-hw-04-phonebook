import React, { PureComponent } from 'react';
// import { createPortal } from 'react-dom';
import { BackdropDiv, ContentDiv } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

export default class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      // console.log('Escape pressed');
    }
  };
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
      }  }
  render() {
    return (
      <BackdropDiv onClick={this.handleBackdropClick}>
        <ContentDiv>{this.props.children}</ContentDiv>
      </BackdropDiv>
    );

    // return createPortal(
    //   <BackdropDiv>
    //     <ContentDiv>{this.props.children}</ContentDiv>
    //   </BackdropDiv>,
    //   modalRoot
    // );
  }
}
