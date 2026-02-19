import { Button, Divider, Input } from '@/shared/components';
import styles from './SignInForm.module.scss';
import { SignInOptions } from '..';

const SignInForm = () => {
  return (
    <form className={styles.signInForm}>
      <div className={styles.group}>
        <Input name="email" label="Email" />
        <Input name="password" label="Password" type="password" />
        <SignInOptions />
      </div>
      <div className={styles.group}>
        <Button type="submit" variant="accent">
          Sign In
        </Button>
        <Divider />
        <Button variant="outline">
          <i className="fi fi-brands-google"></i> Sign in with Google
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
