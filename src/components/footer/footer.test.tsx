import { render, screen } from '@testing-library/react';
import { AppRoute, FooterTitle, SOCIAL_MEDIA } from '../../constants';
import { MemoryRouter } from 'react-router-dom';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correct', () => {
    const expectedText = 'Интернет-магазин фото- и видеотехники';
    const footerNavItemTestId = 'footer-nav-item';
    const socialItemTestId = 'social-item';

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><Footer /></MemoryRouter>);
    const FooterContainer = screen.getByText(expectedText);
    const footerNavItems = screen.getAllByTestId(footerNavItemTestId);
    const socialItems = screen.getAllByTestId(socialItemTestId);

    expect(FooterContainer).toBeInTheDocument();
    expect(footerNavItems.length).toBe(Object.values(FooterTitle).length);
    expect(socialItems.length).toBe(SOCIAL_MEDIA.length);
  });
});
