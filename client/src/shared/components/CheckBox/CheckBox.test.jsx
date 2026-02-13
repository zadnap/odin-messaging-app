import { screen, render } from '@testing-library/react';
import CheckBox from './CheckBox';

describe('CheckBox component', () => {
  test('is unchecked by default', () => {
    render(<CheckBox name="remember" label="Remember me" />);

    expect(screen.getByLabelText('Remember me')).not.toBeChecked();
  });

  test('renders with correct label and name', () => {
    render(<CheckBox name="remember" label="Remember me" />);

    expect(screen.getByLabelText('Remember me')).toBeInTheDocument();
  });

  test('renders with custom id', () => {
    render(<CheckBox id="custom-id" name="remember" label="Remember me" />);

    expect(document.getElementById('custom-id')).toBeInTheDocument();
  });
});
