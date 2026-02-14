import React from 'react';
import { AuthForm } from '../../components';
import { Button } from '@/shared/components';
import { useNavigate } from 'react-router';

const VerifyEmailSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <AuthForm
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
