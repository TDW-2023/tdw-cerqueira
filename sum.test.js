
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './src/app/page'
import React from 'react'

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('Sou Lindo?', async () => {
render(<Home></Home>);

  expect(screen.getByText('O Cerqueira é lindo!')).toBeInTheDocument();
})