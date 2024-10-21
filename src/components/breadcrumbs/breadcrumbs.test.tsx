import { render, screen } from '@testing-library/react';
import Breadcrumbs from './breadcrumbs';
import { AppRoute } from '../../constants';
import { MemoryRouter } from 'react-router-dom';

describe('Component: Breadcrumbs', () => {
  it('should render correct', () => {
    const expectedText = 'Каталог';

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><Breadcrumbs /></MemoryRouter>);
    const BreadcrumbsContainer = screen.getByText(expectedText);

    expect(BreadcrumbsContainer).toBeInTheDocument();
  });
});
