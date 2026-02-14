import { Button } from '@/shared/components';
import { AuthForm } from '../../components';
import { useNavigate } from 'react-router';

const ResetPasswordSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <AuthForm
      title="Password reset!"
      subtitle="You've successfully created a new password click below to sign in"
    >
      <Button variant="accent" onClick={() => navigate('/auth/sign-in')}>
        Sign In
      </Button>
    </AuthForm>
  );
};

export default ResetPasswordSuccessPage;
