import styles from './Button.module.scss';

const Button = ({ children, onClick, icon, type = 'button' }) => {
  return (
    <button className={styles.customButton} onClick={onClick} type={type}>
      <span>{children}</span>
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

export default Button;
