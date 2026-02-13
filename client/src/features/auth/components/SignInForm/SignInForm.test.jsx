import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import SignInForm from './SignInForm';

describe('SignInForm', () => {
  test('renders sign-in form fields', () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });
});
