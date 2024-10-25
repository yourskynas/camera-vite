import { render, screen } from '@testing-library/react';
import { BannerItem } from './banner';
import { promo } from '../../mocks/promo';
import { AppRoute } from '../../constants';
import { MemoryRouter } from 'react-router-dom';

describe('Component: Banner', () => {
  it('should render correct', () => {
    const mockPromo = promo[1];
    const expectedTitle = 'Новинка!';

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><BannerItem promoItem={mockPromo} /></MemoryRouter>);
    const buttonContainer = screen.getByText(expectedTitle);

    expect(buttonContainer).toBeInTheDocument();
  });
});
