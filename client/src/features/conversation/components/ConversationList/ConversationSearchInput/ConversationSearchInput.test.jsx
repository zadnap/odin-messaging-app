import { describe, expect } from 'vitest';
import ConversationSearchInput from './ConversationSearchInput';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

const Wrapper = () => {
  const [value, setValue] = useState('skibidi');
  return <ConversationSearchInput value={value} onChange={setValue} />;
};

describe('ConversationSearchInput component', () => {
  test('renders with label', () => {
    render(<ConversationSearchInput value="" onChange={() => {}} />);

    expect(screen.getByLabelText('Search conversations')).toBeInTheDocument();
  });

  test('shows clear button when having value', () => {
    render(<ConversationSearchInput value="skibidi" onChange={() => {}} />);

    expect(
      screen.getByRole('button', { name: /clear search/i })
    ).toBeInTheDocument();
  });

  test('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<ConversationSearchInput value="" onChange={handleChange} />);

    const input = screen.getByLabelText('Search conversations');
    await user.type(input, 'zadnap');

    expect(handleChange).toHaveBeenCalledTimes(6);
  });

  test('has its value cleared when clear button is clicked', async () => {
    const user = userEvent.setup();

    render(<Wrapper />);

    const clearBtn = screen.getByRole('button', { name: /clear search/i });
    await user.click(clearBtn);

    expect(screen.getByLabelText('Search conversations')).toHaveValue('');
  });
});
