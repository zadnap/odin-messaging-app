import { render, screen } from '@testing-library/react';
import ResetPasswordForm from './ResetPasswordForm';
import { expect } from 'vitest';

describe('ResetPasswordForm', () => {
  test('renders password inputs and submit button', () => {
    render(<ResetPasswordForm />);

    expect(screen.getByLabelText('New Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Reset password' })
    ).toBeInTheDocument();
  });
});
