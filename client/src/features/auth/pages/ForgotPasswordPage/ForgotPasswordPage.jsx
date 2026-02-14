import { BackLink } from '@/shared/components';
import { AuthForm, ForgotPasswordForm } from '../../components';

const ForgotPasswordPage = () => {
  return (
    <AuthForm
      title="Forgot your password?"
      subtitle="A link will be sent to your email to help reset password"
      footer={<BackLink to="/auth/sign-in" text="Back to sign in" />}
    >
      <ForgotPasswordForm />
    </AuthForm>
  );
};

export default ForgotPasswordPage;
