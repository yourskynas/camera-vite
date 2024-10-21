import { MemoryRouter } from 'react-router-dom';

export function withHistory(component: JSX.Element) {
  return (
    <MemoryRouter>
      {component}
    </MemoryRouter>
  );
}
