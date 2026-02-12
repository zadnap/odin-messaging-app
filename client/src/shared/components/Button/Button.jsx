import styles from './Button.module.scss';

const Button = ({
  type = 'button',
  variant = 'primary',
  className = '',
  children,
  onClick,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
