import { BackLink } from '@/shared/components';
import { AuthForm, ResetPasswordForm } from '../../components';

const ResetPasswordPage = () => {
  return (
    <AuthForm
      title="Set a new password"
      subtitle="Your new password must be different from the previously used password"
      footer={<BackLink to="/auth/sign-in" text="Back to sign in" />}
    >
      <ResetPasswordForm />
    </AuthForm>
  );
};

export default ResetPasswordPage;
