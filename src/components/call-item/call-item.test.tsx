import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CallItem from './call-item';
import { withStore } from '../../mocks/mock-component';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { camera } from '../../mocks/camera';

describe('Component: CallItem', () => {
  it('should render correctly', () => {
    const callMeText = 'Свяжитесь со мной';
    const mockCamera = camera;
    const { withStoreComponent } = withStore(<CallItem activeProduct={mockCamera} onClick={() => null} />, {});

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}>{withStoreComponent}</MemoryRouter>);

    expect(screen.getByText(callMeText)).toBeInTheDocument();
  });

  it('should render correctly when user enter phone', async () => {
    const phoneElementTestId = 'phone';
    const expectedPhoneValue = '89202002020';
    const mockCamera = camera;
    const { withStoreComponent } = withStore(<CallItem activeProduct={mockCamera} onClick={() => null} />, {});

    render(<MemoryRouter initialEntries={[AppRoute.Catalog]}>{withStoreComponent}</MemoryRouter>);
    await userEvent.type(
      screen.getByTestId(phoneElementTestId),
      expectedPhoneValue,
    );

    expect(screen.getByDisplayValue(expectedPhoneValue)).toBeInTheDocument();
  });
});
