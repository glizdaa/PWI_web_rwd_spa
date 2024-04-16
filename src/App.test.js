import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Witaj na stronie głównej!/i);
  expect(linkElement).toBeInTheDocument();
});
