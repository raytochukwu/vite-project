import { render, screen } from '@testing-library/react'
import App from '../App'
import '@testing-library/jest-dom'

test('renders counter', () => {
  render(<App />)
  expect(screen.getByText('Count: 0')).toBeInTheDocument()
})
