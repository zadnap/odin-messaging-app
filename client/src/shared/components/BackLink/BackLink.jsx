import { Link } from 'react-router';
import styles from './BackLink.module.scss';

const BackLink = ({ to, text }) => {
  return (
    <Link to={to} className={styles.backLink}>
      <span className={styles.icon}>
        <i className="fi fi-rr-arrow-left"></i>
      </span>
      {text}
    </Link>
  );
};

export default BackLink;
