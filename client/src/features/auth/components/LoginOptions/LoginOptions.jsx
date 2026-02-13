import { CheckBox } from '@/shared/components';
import styles from './LoginOptions.module.scss';
import { Link } from 'react-router';

const LoginOptions = () => {
  return (
    <div className={styles.loginOptions}>
      <CheckBox label="Remember me" name="remember" />
      <Link to="/auth/forgot-password" className={styles.forgotPasswordLink}>
        Forgot Password
      </Link>
    </div>
  );
};

export default LoginOptions;
