import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '@/app/page'


describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })
  
  it('should have an svg', () => {
    const main = screen.getByRole('main')
    const picture = main.querySelector('picture')
    const svg = picture?.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('should have a title', () => {
    const title = screen.getByText(/Bazar Online/i)
    expect(title).toBeInTheDocument()
  })
  
  it('should have a input search with placeholder text', () => {
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'laptops, smartphones, libros...')
  })


  it('should have a button search', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Buscar/i)
  })
})

