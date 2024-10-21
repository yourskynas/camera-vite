import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-component';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { cameras } from '../../mocks/cameras';
import SimilarSection from './similar-section';

describe('Component: SimilarSection', () => {
  it('should render correctly', () => {
    const text = 'Похожие товары';
    const mockCameras = cameras;
    const { withStoreComponent } = withStore(<SimilarSection cameras={mockCameras} onClick={() => mockCameras} />, {});

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}>{withStoreComponent}</MemoryRouter>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
