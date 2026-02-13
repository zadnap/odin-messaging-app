import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import LoginOptions from './LoginOptions';

describe('LoginOptions', () => {
  test('renders remember me checkbox and forgot password link', () => {
    render(
      <MemoryRouter>
        <LoginOptions />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();

    const link = screen.getByText(/forgot password/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/auth/forgot-password');
  });
});
