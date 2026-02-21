import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input component', () => {
  test('renders label and input', () => {
    render(<Input id="email" label="Email" value="" onChange={() => {}} />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
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
});
