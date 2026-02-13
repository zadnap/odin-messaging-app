import { AuthForm, AuthSwitch, SignInForm } from '../../components';

const SignInPage = () => {
  return (
    <AuthForm
      title="Welcome Back"
      subtitle="Log in to continue where you left off"
      footer={
        <AuthSwitch
          text="Don't have an account?"
          linkText="Sign Up"
          to="/auth/sign-up"
        />
      }
    >
      <SignInForm />
    </AuthForm>
  );
};

export default SignInPage;
