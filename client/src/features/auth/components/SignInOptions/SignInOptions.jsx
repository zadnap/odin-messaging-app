import { CheckBox } from '@/shared/components';
import styles from './SignInOptions.module.scss';
import { Link } from 'react-router';

const SignInOptions = () => {
  return (
    <div className={styles.signInOptions}>
      <CheckBox label="Remember me" name="remember" />
      <Link to="/auth/forgot-password" className={styles.forgotPasswordLink}>
        Forgot Password
      </Link>
    </div>
  );
};

export default SignInOptions;
