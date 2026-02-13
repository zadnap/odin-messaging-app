import { AuthForm, AuthSwitch, SignUpForm } from '../../components';

const SignUpPage = () => {
  return (
    <AuthForm
      title="Create an Account"
      subtitle="Join us and get started in minutes"
      footer={
        <AuthSwitch
          text="Already have an account?"
          linkText="Sign In"
          to="/auth/sign-in"
        />
      }
    >
      <SignUpForm />
    </AuthForm>
  );
};

export default SignUpPage;
