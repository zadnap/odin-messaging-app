import { Button, Divider, Input } from '@/shared/components';
import styles from './LoginForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { LoginOptions } from '..';

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <div className={styles.group}>
        <Input name="email" label="Email" />
        <Input name="password" label="Password" type="password" />
        <LoginOptions />
      </div>
      <div className={styles.group}>
        <Button type="submit" variant="accent">
          Sign In
        </Button>
        <Divider />
        <Button variant="outline">
          <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
