import React from 'react';
import { AuthForm } from '../../components';
import { Button } from '@/shared/components';
import { useNavigate } from 'react-router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const VerifyEmailSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <AuthForm
      icon={faCheck}
      title="You're all set!"
      subtitle="Your email has been verified successfully. You can now sign in to your account."
    >
      <Button variant="accent" onClick={() => navigate('/auth/sign-in')}>
        Sign In
      </Button>
    </AuthForm>
  );
};

export default VerifyEmailSuccessPage;
