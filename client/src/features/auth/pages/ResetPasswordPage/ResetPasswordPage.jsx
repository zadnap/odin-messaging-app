import { BackLink } from '@/shared/components';
import { AuthForm, ResetPasswordForm } from '../../components';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const ResetPasswordPage = () => {
  return (
    <AuthForm
      icon={faLock}
      title="Set a new password"
      subtitle="Your new password must be different from the previously used password"
      footer={<BackLink to="/auth/sign-in" text="Back to sign in" />}
    >
      <ResetPasswordForm />
    </AuthForm>
  );
};

export default ResetPasswordPage;
