import styles from './Select.module.scss';

const Select = ({
  name,
  options = [],
  value,
  onChange,
  placeholder = 'Seleccione una opción',
  className = '',
  label,
  id,
}) => {
  const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`${styles.customSelect} ${className}`}
        value={value}
        onChange={onChange}
        name={name}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
