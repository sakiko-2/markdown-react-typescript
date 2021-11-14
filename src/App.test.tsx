import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders textarea for makdown input', () => {
  render(<App />);
  const textareaElement = screen.getByPlaceholderText(/write markdown here/i);
  expect(textareaElement).toBeInTheDocument();
});
