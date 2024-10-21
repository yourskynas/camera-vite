import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Component: Button', () => {
  it('should render correct', () => {
    const expectedTitle = 'Характеристики';
    const isActive = 'is-active';

    render(<Button activeElement={isActive} onClick={() => isActive} textElement={expectedTitle} />);
    const buttonContainer = screen.getByText(expectedTitle);

    expect(buttonContainer).toBeInTheDocument();
  });
});
