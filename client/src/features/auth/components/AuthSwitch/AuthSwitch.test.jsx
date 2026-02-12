import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import AuthSwitch from './AuthSwitch';

describe('AuthSwitch', () => {
  const props = {
    text: "Don't have an account?",
    linkText: 'Sign Up',
    to: '/auth/register',
  };

  const setup = () =>
    render(
      <MemoryRouter>
        <AuthSwitch {...props} />
      </MemoryRouter>
    );

  test('renders the main text', () => {
    setup();
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });

  test('renders the link text', () => {
    setup();
    expect(
      screen.getByRole('link', { name: props.linkText })
    ).toBeInTheDocument();
  });

  test('has correct link destination', () => {
    setup();
    const link = screen.getByRole('link', { name: props.linkText });
    expect(link).toHaveAttribute('href', props.to);
  });
});
