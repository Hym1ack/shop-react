import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import modalClose from "../../assets/images/popups/modalExit.svg";

const modalRootElem = document.querySelector("#modal");

function Modal({ children, open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div
      className={open ? `${s.modalContainer} ${s.active}` : s.modalContainer}
    >
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,jsx-a11y/click-events-have-key-events */}
      <div
        className={s.modalOverlay}
        role="button"
        tabIndex={0}
        onClick={onClose}
      />

      <div className={s.modal}>
        <button className={s.modalClose} type="button" onClick={onClose}>
          <img src={modalClose} alt="X" />
        </button>

        {children}
      </div>
    </div>,
    modalRootElem
  );
}

export default Modal;
