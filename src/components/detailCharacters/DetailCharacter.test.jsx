// eslint-disable-next-line
global.fetch = require('node-fetch');

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailCharacter from './DetailCharacter';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<DetailCharacter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
