import styles from './Divider.module.scss';

const Divider = ({ text = 'OR' }) => {
  return (
    <div className={styles.divider}>
      <span>{text}</span>
    </div>
  );
};

export default Divider;
