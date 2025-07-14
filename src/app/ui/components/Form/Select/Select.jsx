import styles from './Select.module.scss';

const Select = ({
  name,
  options = [],
  value,
  onChange,
  placeholder = 'Seleccione una opción',
  className = '',
}) => {
  return (
    <select
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
  );
};

export default Select;
