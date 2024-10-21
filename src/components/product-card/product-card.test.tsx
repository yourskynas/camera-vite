import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../constants';
import ProductCard from './product-card';
import { camera } from '../../mocks/camera';

describe('Component: ProductCard', () => {
  it('should render correctly', () => {
    const expectedPrice = 'Цена:';
    const expectedPay = 'Купить';
    const mockCamera = camera;

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><ProductCard camera={mockCamera} onClick={() => null} /></MemoryRouter>);

    expect(screen.getByText(expectedPrice)).toBeInTheDocument();
    expect(screen.getByText(expectedPay)).toBeInTheDocument();
  });
});
