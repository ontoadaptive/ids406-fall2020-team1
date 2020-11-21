import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Test Major Components', () => {
  const { getByText } = render(<App />);

});
