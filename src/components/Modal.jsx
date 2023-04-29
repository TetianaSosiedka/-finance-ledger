import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ values, onClick }) => {
  return createPortal(
    <div className="backdrop" onClick={onClick}>
      <div className="modal_window">
        <div className="modat_title">Thank you {values.name}!</div>
        <p className="modal_text">Your form submission has received.</p>
        <a
          className="modal_button-back"
          href="/"
          title=" &larr; Back to our site"
        >
          &larr; Back to our site
        </a>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
