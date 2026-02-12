import styles from './AuthBanner.module.scss';

const AuthBanner = () => {
  return (
    <section className={styles.authBanner} aria-labelledby="auth-banner-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>REAL CONVERSATIONS</p>
        <span className={styles.divider} aria-hidden></span>
      </header>
      <div className={styles.content}>
        <h1 id="auth-banner-title">
          Stay Connected <br />
          Anytime, Anywhere
        </h1>
        <blockquote>
          <p>
            Chat easily, share moments, and stay close to the people that
            matter.
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default AuthBanner;
