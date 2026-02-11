import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input component', () => {
  test('renders label and input', () => {
    render(
      <Input
        id="email"
        label="Email"
        value=""
        onChange={() => {}}
        placeholder="Enter email"
      />
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  test('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <Input id="username" label="Username" value="" onChange={handleChange} />
    );

    const input = screen.getByLabelText('Username');
    await user.type(input, 'john');

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  test('shows error icon and message when status is error and value is empty', () => {
    render(
      <Input
        id="email"
        label="Email"
        value=""
        onChange={() => {}}
        status="error"
        message="Email is required"
      />
    );

    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');

    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('does not show password toggle when value is empty', () => {
    render(
      <Input
        id="password"
        label="Password"
        type="password"
        value=""
        onChange={() => {}}
      />
    );

    expect(
      screen.queryByRole('button', { name: /show password/i })
    ).not.toBeInTheDocument();
  });

  test('does not show error icon when value exists', () => {
    render(
      <Input
        id="email"
        label="Email"
        value="test@test.com"
        status="error"
        message="Invalid email"
        onChange={() => {}}
      />
    );

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('toggles password visibility', async () => {
    const user = userEvent.setup();

    render(
      <Input
        id="password"
        label="Password"
        type="password"
        value="secret123"
        onChange={() => {}}
      />
    );

    const input = screen.getByLabelText('Password');
    const toggleButton = screen.getByRole('button', {
      name: /show password/i,
    });

    expect(input).toHaveAttribute('type', 'password');

    await user.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');
    expect(toggleButton).toHaveAccessibleName('Hide password');

    await user.click(toggleButton);
    expect(input).toHaveAttribute('type', 'password');
  });

  test('hides label visually when hideLabel is true', () => {
    render(
      <Input id="name" label="Name" hideLabel value="" onChange={() => {}} />
    );

    const label = screen.getByText('Name');
    expect(label).toHaveClass('srOnly');
  });

  test('applies custom className', () => {
    render(
      <Input
        id="name"
        label="Name"
        value=""
        className="custom-class"
        onChange={() => {}}
      />
    );

    expect(document.querySelector('.custom-class')).toBeInTheDocument();
  });
});
