import { AuthForm, AuthSwitch, RegisterForm } from '../../components';

const RegisterPage = () => {
  return (
    <AuthForm
      title="Create an Account"
      subtitle="Join us and get started in minutes"
      footer={
        <AuthSwitch
          text="Already have an account?"
          linkText="Sign In"
          to="/auth/login"
        />
      }
    >
      <RegisterForm />
    </AuthForm>
  );
};

export default RegisterPage;
