import styles from './ModalForm.module.scss';
import Modal from '../Modal';

const ModalForm = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.card}>{children}</div>
    </Modal>
  );
};

export default ModalForm;
