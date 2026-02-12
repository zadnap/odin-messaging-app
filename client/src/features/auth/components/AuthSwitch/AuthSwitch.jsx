import { Link } from 'react-router';
import styles from './AuthSwitch.module.scss';

const AuthSwitch = ({ text, linkText, to }) => {
  return (
    <p className={styles.authSwitch}>
      <span className={styles.text}>{text}</span>{' '}
      <Link to={to} className={styles.linkText}>
        {linkText}
      </Link>
    </p>
  );
};

export default AuthSwitch;
