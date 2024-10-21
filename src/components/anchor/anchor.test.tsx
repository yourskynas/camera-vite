import { render, screen } from '@testing-library/react';
import Anchor from './anchor';

describe('Component: Anchor', () => {
  it('should render correct', () => {
    const anchorLinkTestId = 'anchor-link';

    render(<Anchor />);
    const anchorLink = screen.getByTestId(anchorLinkTestId);

    expect(anchorLink).toBeInTheDocument();
  });
});
