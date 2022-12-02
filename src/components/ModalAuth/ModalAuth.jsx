import Modal from "../Modal/Modal";
import s from "./ModalAuth.module.css";
import LoginModal from "../ProfileLogin/LoginModal";

function ModalAuth({ modalOpen, setModalOpen }) {
  return (
    <Modal open={modalOpen} onClose={setModalOpen}>
      <div className={s.auth}>
        <LoginModal />
      </div>
    </Modal>
  );
}

export default ModalAuth;
