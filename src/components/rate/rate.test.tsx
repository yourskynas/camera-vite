import { render, screen } from '@testing-library/react';
import Rate from './rate';

describe('Component: Rate', () => {
  it('should render correct when "Rate" get all props', () => {
    const expectedText = /Всего оценок/i;
    const expectedClass = 'product-card__rate';
    const expectedRating = 3;
    const expectedReviewCount = 3;

    render(<Rate placeInContent={expectedClass} rating={expectedRating} reviewCount={expectedReviewCount} />);
    const rateContainer = screen.getByText(expectedText);

    expect(rateContainer).toBeInTheDocument();
  });

  it('should render correct when "placeInContent" is "review-card__rate"', () => {
    const expectedText = /Всего оценок/i;
    const expectedClass = 'review-card__rate';

    render(<Rate placeInContent={expectedClass} />);
    const rateContainer = screen.queryByText(expectedText);

    expect(rateContainer).not.toBeInTheDocument();
  });
});
