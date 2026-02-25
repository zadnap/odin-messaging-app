import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import useDebounce from './useDebounce';
import { renderHook } from '@testing-library/react';
import { act } from 'react';

describe('useDebounce hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('skibidi', 300));

    expect(result.current).toBe('skibidi');
  });

  test('does not update value before delay', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      {
        initialProps: { value: 'skibidi' },
      }
    );

    rerender({ value: 'toilet' });

    expect(result.current).toBe('skibidi');
  });

  test('updates value after delay', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      {
        initialProps: { value: 'skibidi' },
      }
    );

    rerender({ value: 'toilet' });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe('toilet');
  });
});
