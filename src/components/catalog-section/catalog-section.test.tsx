import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-component';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../constants';
import CatalogSection from './catalog-section';
import { cameras } from '../../mocks/cameras';

describe('Component: CatalogSection', () => {
  it('should render correctly', () => {
    const expectedText = 'Каталог фото- и видеотехники';
    const mockCameras = cameras;
    const { withStoreComponent } = withStore(<CatalogSection cameras={mockCameras} onClick={() => null} />, {});

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}>{withStoreComponent}</MemoryRouter>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
