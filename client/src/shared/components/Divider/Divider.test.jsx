import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('Divider', () => {
  test('renders default text', () => {
    render(<Divider />);
    expect(screen.getByText('OR')).toBeInTheDocument();
  });

  test('renders custom text', () => {
    render(<Divider text="hello" />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
