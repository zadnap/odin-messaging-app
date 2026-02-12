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
  label,
  status = 'default',
  className = '',
  message = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const messageId = message ? `${id}-message` : undefined;

  return (
    <div className={`${styles.inputWrapper} ${styles[status]}`}>
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
          placeholder=" "
          className={styles.input}
          aria-describedby={messageId}
          aria-invalid={status === 'error'}
        />
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        {!value && status === 'error' && (
          <span
            className={styles.stateIcon}
            aria-hidden
            data-testid="error-icon"
          >
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
