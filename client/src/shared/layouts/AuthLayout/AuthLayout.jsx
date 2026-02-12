import { Outlet } from 'react-router';
import styles from './AuthLayout.module.scss';
import { AuthBanner } from '@/features/auth/components';

const AuthLayout = () => {
  return (
    <main className={styles.authLayout}>
      <div className={styles.authContainer}>
        <AuthBanner />
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
