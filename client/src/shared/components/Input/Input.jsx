import styles from './Input.module.scss';
import { useId, useRef, useState } from 'react';

const Input = ({
  id,
  name,
  value,
  onChange,
  type = 'text',
  label,
  status = 'default',
  className = '',
  message = '',
}) => {
  const inputId = id ?? useId();
  const inputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(value));
  const messageId = message ? `${inputId}-message` : undefined;

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0);
    onChange?.(e);
  };

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
          id={inputId}
          name={name}
          ref={inputRef}
          value={value}
          onChange={handleChange}
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder=" "
          className={styles.input}
          aria-describedby={messageId}
          aria-invalid={status === 'error'}
        />
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        {!hasValue && status === 'error' && (
          <span
            className={styles.stateIcon}
            aria-hidden
            data-testid="error-icon"
          >
            <i className="fi fi-sr-exclamation"></i>
          </span>
        )}
        {hasValue && type === 'password' && (
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <i className="fi fi-rr-eye-crossed"></i>
            ) : (
              <i className="fi fi-rr-eye"></i>
            )}
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
