import styles from './TextArea.module.scss';

const TextArea = ({
  placeholder,
  value,
  onChange,
  rows = 4,
  className = '',
  label,
  id,
}) => {
  const textAreaId =
    id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={textAreaId} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={textAreaId}
        className={`${styles.customTextarea} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
