import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import BackLink from './BackLink';
import { expect } from 'vitest';

describe('BackLink component', () => {
  test('renders with correct text and href', () => {
    render(
      <MemoryRouter>
        <BackLink to="/auth/sign-in" text="Back to sign in" />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /back to sign in/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/auth/sign-in');
    expect(link.querySelector('svg')).toBeInTheDocument();
  });
});
