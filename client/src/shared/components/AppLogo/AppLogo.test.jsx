import { render, screen } from '@testing-library/react';
import AppLogo from './AppLogo';
import { vi } from 'vitest';

vi.mock('@/shared/assets/images/logo.png', () => ({
  default: 'logo-mock.png',
}));

describe('AppLogo component', () => {
  test('renders logo image by default (icon variant)', () => {
    render(<AppLogo />);

    const img = screen.getByAltText(/app logo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'logo-mock.png');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  test('does NOT render app name when variant is icon', () => {
    render(<AppLogo appName="Sentinel" />);

    expect(screen.queryByText('Sentinel')).not.toBeInTheDocument();
  });

  test('renders app name when variant is withText', () => {
    render(<AppLogo variant="withText" appName="Sentinel" />);

    expect(screen.getByText('Sentinel')).toBeInTheDocument();
  });

  test('matches snapshot for icon variant', () => {
    const { container } = render(<AppLogo />);
    expect(container).toMatchSnapshot();
  });

  test('matches snapshot for withText variant', () => {
    const { container } = render(
      <AppLogo variant="withText" appName="Sentinel" />
    );

    expect(container).toMatchSnapshot();
  });
});
