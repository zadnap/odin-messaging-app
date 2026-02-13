import { render, screen } from '@testing-library/react';
import AuthForm from './AuthForm';

describe('AuthForm', () => {
  test('renders title, subtitle, children and footer', () => {
    render(
      <AuthForm
        title="Login"
        subtitle="Welcome back"
        footer={<div>Footer</div>}
      >
        <form>Form content</form>
      </AuthForm>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Welcome back')).toBeInTheDocument();
    expect(screen.getByText('Form content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  test('does not render subtitle when not provided', () => {
    render(<AuthForm title="Register">Child</AuthForm>);

    expect(screen.queryByText(/welcome/i)).not.toBeInTheDocument();
  });
});
