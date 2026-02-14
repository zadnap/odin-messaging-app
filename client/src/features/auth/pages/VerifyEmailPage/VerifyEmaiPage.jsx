import { BackLink, Button } from '@/shared/components';
import { AuthForm } from '../../components';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const VerifyEmailPage = () => {
  return (
    <AuthForm
      icon={faEnvelope}
      title="Check your Email"
      subtitle={
        <>
          A verification link has been sent to{' '}
          <strong>za****p@gmail.com</strong>. Didn't receive it? Check your spam
          folder or resend.
        </>
      }
      footer={<BackLink to="/auth/sign-in" text="Back to sign in" />}
    >
      <Button variant="accent">Resend</Button>
    </AuthForm>
  );
};

export default VerifyEmailPage;
