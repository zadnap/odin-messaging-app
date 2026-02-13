import { useId } from 'react';
import styles from './CheckBox.module.scss';

const CheckBox = ({ id, name, label }) => {
  const checkBoxId = id ?? useId();

  return (
    <label htmlFor={checkBoxId} className={styles.checkBoxContainer}>
      <input
        type="checkbox"
        name={name}
        id={checkBoxId}
        className={styles.checkBox}
      />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default CheckBox;
