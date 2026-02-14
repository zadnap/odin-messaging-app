import { screen, render } from '@testing-library/react';
import ForgotPasswordForm from './ForgotPasswordForm';

describe('ForgotPasswordForm', () => {
  test('renders email input and submit button', () => {
    render(<ForgotPasswordForm />);

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /get link/i })
    ).toBeInTheDocument();
  });
});
