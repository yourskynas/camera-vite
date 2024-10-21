import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-component';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { ReviewItem } from './review';
import { reviews } from '../../mocks/reviews';

describe('Component: Review', () => {
  it('should render correctly', () => {
    const text = 'Достоинства:';
    const mockReview = reviews[1];
    const { withStoreComponent } = withStore(<ReviewItem review={mockReview} />, {});

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}>{withStoreComponent}</MemoryRouter>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
