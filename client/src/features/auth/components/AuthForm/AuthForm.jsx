import { AppLogo } from '@/shared/components';
import styles from './AuthForm.module.scss';

const AuthForm = ({ title, subtitle, children, footer }) => {
  return (
    <section className={styles.authForm}>
      <AppLogo variant="withText" appName="Sentinel" />
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </header>
        <div className={styles.formContent}>{children}</div>
      </div>
      <footer className={styles.footer}>{footer}</footer>
    </section>
  );
};

export default AuthForm;
