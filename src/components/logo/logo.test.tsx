import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../constants';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correct when props is "header"', () => {
    const logoAriaLabel = 'Переход на главную';
    const positionHeader = 'header';

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><Logo position={positionHeader} /></MemoryRouter>);
    const logoContainer = screen.getByLabelText(logoAriaLabel);

    expect(logoContainer).toBeInTheDocument();
  });

  it('should render correct when props is "footer"', () => {
    const logoAriaLabel = 'Переход на главную';
    const positionFooter = 'footer';

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><Logo position={positionFooter} /></MemoryRouter>);
    const logoContainer = screen.getByLabelText(logoAriaLabel);

    expect(logoContainer).toBeInTheDocument();
  });
});
