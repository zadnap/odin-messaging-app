import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('renders login form fields', () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });
});
