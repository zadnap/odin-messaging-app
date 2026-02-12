import { screen, render } from '@testing-library/react';
import AuthBanner from './AuthBanner';

describe('AuthBanner component', () => {
  test('matches snapshot', () => {
    const { container } = render(<AuthBanner />);

    expect(container).toMatchSnapshot();
  });

  test('renders the main heading', () => {
    render(<AuthBanner />);

    const heading = screen.getByRole('heading', {
      name: /stay connected/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test('renders eyebrow text', () => {
    render(<AuthBanner />);

    expect(screen.getByText(/real conversations/i)).toBeInTheDocument();
  });

  test('links section with heading via aria-labelledby', () => {
    render(<AuthBanner />);

    const section = screen.getByRole('region');
    const heading = screen.getByRole('heading');

    expect(section).toHaveAttribute(
      'aria-labelledby',
      heading.getAttribute('id')
    );
  });

  test('has an aria-hidden divider', () => {
    render(<AuthBanner />);

    const divider = document.querySelector('[aria-hidden="true"]');
    expect(divider).toBeInTheDocument();
  });
});
