import { render, screen } from '@testing-library/react';
import AppLogo from './AppLogo';
import { vi } from 'vitest';

vi.mock('@/shared/assets/images/logo.png', () => ({
  default: 'logo-mock.png',
}));

describe('AppLogo component', () => {
  test('matches snapshot', () => {
    const { container } = render(<AppLogo />);

    expect(container).toMatchSnapshot();
  });

  test('renders logo image', () => {
    render(<AppLogo />);

    const img = screen.getByAltText(/app logo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'logo-mock.png');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  test('renders app name', () => {
    render(<AppLogo />);

    expect(screen.getByText('Sentinel')).toBeInTheDocument();
  });
});
