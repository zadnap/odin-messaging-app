import { AuthForm, AuthSwitch, LoginForm } from '../../components';

const LoginPage = () => {
  return (
    <AuthForm
      title="Welcome Back"
      subtitle="Log in to continue where you left off"
      footer={
        <AuthSwitch
          text="Don't have an account?"
          linkText="Sign Up"
          to="/auth/register"
        />
      }
    >
      <LoginForm />
    </AuthForm>
  );
};

export default LoginPage;
