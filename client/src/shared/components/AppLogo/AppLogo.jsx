import styles from './AppLogo.module.scss';
import logo from '@/shared/assets/images/logo.png';

const AppLogo = ({ variant = 'icon', appName }) => {
  return (
    <div className={`${styles.appLogo} ${styles[variant]}`}>
      <img src={logo} alt="App logo" loading="lazy" />
      {variant === 'withText' && <p className={styles.appName}>{appName}</p>}
    </div>
  );
};

export default AppLogo;
