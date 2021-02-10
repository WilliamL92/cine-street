import { render, screen } from '@testing-library/react';
import App from './register';

test('renders learn react link', () => {
  render(<register />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
