import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const danVar = true;

    const { asFragment } = render(<App />);
    expect(danVar).toEqual(true);
  });
});
