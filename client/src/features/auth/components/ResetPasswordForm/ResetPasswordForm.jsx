import { Button, Input } from '@/shared/components';
import styles from './ResetPasswordForm.module.scss';

const ResetPasswordForm = () => {
  return (
    <form className={styles.resetPasswordForm}>
      <Input label="New Password" />
      <Input label="Confirm Password" />
      <Button type="submit" variant="accent">
        Reset password
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
