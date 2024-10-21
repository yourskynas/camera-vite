import { render, screen } from '@testing-library/react';
import Header from './header';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../constants';

describe('Component: Header', () => {
  it('should render correct', () => {
    const headerTestId = 'header-test';

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><Header /></MemoryRouter>);

    const headerComponent = screen.getByTestId(headerTestId);

    expect(headerComponent).toBeInTheDocument();
  });
});
