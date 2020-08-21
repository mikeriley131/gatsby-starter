import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import iconClose from '../images/icon-close.svg';

Modal.setAppElement(`#___gatsby`);

export const Dialog = ({
  modalHeading,
  modalContent,
  modalIsOpen,
  handleModalClose,
  modalTitle,
}) => {
  useEffect(() => {
    if (modalIsOpen) {
      // When the modal is shown, we want a fixed body
      document.body.style.top = `-${window.pageYOffset}px`;
      document.body.style.position = 'fixed';
    } else {
      // When the modal is hidden, we want to remain at the top of the scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModalClose}
      contentLabel={modalTitle}
      className="modal"
      overlayClassName="overlay"
      shouldCloseOnOverlayClick
    >
      <button
        className="modal__close"
        type="button"
        onClick={handleModalClose}
        aria-label="close modal"
      >
        <span className="visuallyhidden">close</span>
        <img src={iconClose} alt="" />
      </button>
      <h2 className="modal__heading">{modalHeading}</h2>
      <p className="modal__content">{modalContent}</p>
    </Modal>
  );
};

Dialog.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  modalContent: PropTypes.string,
  modalHeading: PropTypes.string,
  modalIsOpen: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

Dialog.defaultProps = {
  modalContent: '',
  modalHeading: '',
};
