import { screen, render } from '@testing-library/react';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  test('renders register form fields', () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
  });
});
