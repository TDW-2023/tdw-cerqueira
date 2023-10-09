
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './page'
import React from 'react'

test('Sou Lindo?', async () => {
render(<Home></Home>);

  expect(screen.getByText('O Cerqueira é lindo!')).toBeInTheDocument();
})