import { Outlet } from 'react-router';
import styles from './MainLayout.module.scss';
import { AppSidebar } from '@/shared/components';

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <AppSidebar />
      <main className={styles.outlet}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
