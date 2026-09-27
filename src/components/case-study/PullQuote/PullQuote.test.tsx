import { render, screen } from '@testing-library/react';
import { PullQuote } from './PullQuote';

describe('PullQuote', () => {
  it('renders a blockquote', () => {
    render(<PullQuote>“If you shut down the console, we can’t operate.”</PullQuote>);
    const quote = screen.getByText(/shut down the console/).closest('blockquote');
    expect(quote).toBeInTheDocument();
  });
});
