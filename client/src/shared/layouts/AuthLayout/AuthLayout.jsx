import { Outlet } from 'react-router';
import styles from './AuthLayout.module.scss';
import { AuthBanner } from '@/features/auth/components';

const AuthLayout = () => {
  return (
    <main className={styles.authLayout}>
      <AuthBanner />
      <Outlet />
    </main>
  );
};

export default AuthLayout;
