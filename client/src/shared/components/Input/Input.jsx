import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Input.module.scss';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Input = ({
  id,
  value,
  onChange,
  type = 'text',
  placeholder,
  label,
  hideLabel = false,
  status = 'default',
  className = '',
  message = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const messageId = message ? `${id}-message` : undefined;

  return (
    <div className={`${styles.inputWrapper} ${styles[status]}`}>
      {label && (
        <label
          className={`${styles.inputLabel} ${hideLabel ? 'srOnly' : ''}`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={`
          ${styles.inputControl} 
          ${type === 'password' ? styles.isPassword : ''} 
          ${className}
        `}
      >
        <input
          id={id}
          value={value}
          onChange={onChange}
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          className={styles.input}
          aria-describedby={messageId}
          aria-invalid={status === 'error'}
        />
        {!value && status === 'error' && (
          <span className={styles.stateIcon} aria-hidden>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </span>
        )}
        {value && type === 'password' && (
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        )}
      </div>
      {message && (
        <p
          id={messageId}
          className={`${styles.message} ${styles[status]}`}
          role={status === 'error' ? 'alert' : undefined}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Input;
