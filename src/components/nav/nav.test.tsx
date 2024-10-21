import { render, screen } from '@testing-library/react';
import Nav from './nav';
import { AppRoute, NavLink } from '../../constants';
import { MemoryRouter } from 'react-router-dom';

describe('Component: Nav', () => {
  it('should render correct', () => {
    const navContainerTestId = 'nav-container';
    const navElementTestId = 'nav-element';

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><Nav /></MemoryRouter>);
    const navContainer = screen.getByTestId(navContainerTestId);
    const navElements = screen.getAllByTestId(navElementTestId);

    expect(navContainer).toBeInTheDocument();
    expect(navElements.length).toBe(Object.values(NavLink).length);
  });
});
