import { Button, Input } from '@/shared/components';
import styles from './ForgotPasswordForm.module.scss';

const ForgotPasswordForm = () => {
  return (
    <form className={styles.forgotPasswordForm}>
      <Input name="email" label="Email Address" />
      <Button type="submit" variant="accent">
        Get Link
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
