import { Button, Divider, Input } from '@/shared/components';
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
  return (
    <form className={styles.signUpForm}>
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
          <i className="fi fi-brands-google"></i> Sign up with Google
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
