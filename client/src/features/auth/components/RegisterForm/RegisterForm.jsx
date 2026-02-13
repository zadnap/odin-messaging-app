import { Button, Divider, Input } from '@/shared/components';
import styles from './RegisterForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const RegisterForm = () => {
  return (
    <form className={styles.registerForm}>
      <div className={styles.group}>
        <Input name="email" label="Email" type="email" />
        <Input name="password" label="Password" type="password" />
        <Input
          name="confirmPassword"
          label="Confirm Password"
          type="password"
        />
      </div>
      <div className={styles.group}>
        <Button type="submit" variant="accent">
          Sign Up
        </Button>
        <Divider />
        <Button variant="outline">
          <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
