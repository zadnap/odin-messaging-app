import { BackLink, Button } from '@/shared/components';
import { AuthForm } from '../../components';

const VerifyEmailPage = () => {
  return (
    <AuthForm
      title="Check your Email"
      subtitle={
        <>
          A verification link has been sent to{' '}
          <strong>za****p@gmail.com</strong>.
          <br />
          Didn't receive it? Check your spam folder or resend.
        </>
      }
      footer={<BackLink to="/auth/sign-in" text="Back to sign in" />}
    >
      <Button variant="accent">Resend</Button>
    </AuthForm>
  );
};

export default VerifyEmailPage;
