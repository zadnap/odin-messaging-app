import { Link } from 'react-router';
import styles from './BackLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackLink = ({ to, text }) => {
  return (
    <Link to={to} className={styles.backLink}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
      {text}
    </Link>
  );
};

export default BackLink;
