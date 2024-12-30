import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../constants';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correct when no props', () => {
    const expectedText = 'Перейти на главную';

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><NotFoundPage /></MemoryRouter>);
    const pageContainer = screen.getByText(expectedText);

    expect(pageContainer).toBeInTheDocument();
  });

  it('should render correct when props is "Loading..."', () => {
    const expectedTitle = 'Loading...';
    const expectedText = 'Перейти на главную';

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}><NotFoundPage title={expectedTitle} /></MemoryRouter>);

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.queryByText(expectedText)).not.toBeInTheDocument();
  });
});
