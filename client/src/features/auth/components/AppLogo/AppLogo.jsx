import styles from './AppLogo.module.scss';
import logo from '@/shared/assets/images/logo.png';

const AppLogo = () => {
  return (
    <div className={styles.appLogo}>
      <img src={logo} alt="App logo" loading="lazy" />
      <p className={styles.appName}>Sentinel</p>
    </div>
  );
};

export default AppLogo;
