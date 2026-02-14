import { BackLink } from '@/shared/components';
import { AuthForm, ForgotPasswordForm } from '../../components';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const ForgotPasswordPage = () => {
  return (
    <AuthForm
      icon={faKey}
      title="Forgot your password?"
      subtitle="A link will be sent to your email to help reset password"
      footer={<BackLink to="/auth/sign-in" text="Back to sign in" />}
    >
      <ForgotPasswordForm />
    </AuthForm>
  );
};

export default ForgotPasswordPage;
