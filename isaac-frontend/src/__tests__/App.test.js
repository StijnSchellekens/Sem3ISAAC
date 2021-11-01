import App from '../App';
import React from 'react';

describe('Testing App.js', () => {
  it('should render App.js', () => {
    render(<App />);
    const AppElement = screen.getByTestId('app-test1');
    expect(AppElement).toBeInTheDocument();
  });
//   it('sds', () => {
//     expect(2+2).toBe(4);
//   });
});
