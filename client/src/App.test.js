import React from 'react';

import {render} from '@testing-library/react';


import App from './App';

// import {scoreStrike} from './App'

test('App renders without crashing', () => {
 
  render(<App />)
});


test(' App header contains text', () => {
  const { getByText } = render(<App />);
  getByText(/World Cup/i);
});