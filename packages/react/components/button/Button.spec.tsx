import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('<Button />', () => {
  it('should render the button with the text', () => {
    render(<Button>Label</Button>)

    const button = screen.getByRole('button', { name: /label/i })
    expect(button).toBeInTheDocument()
  })

  it('should render the button with the text and disabled', () => {
    render(<Button disabled>Label</Button>)

    const button = screen.getByRole('button', { name: /label/i })
    expect(button).toBeInTheDocument()

    expect(button.getAttributeNode('class')).toHaveTextContent(
      'c-hUiIRX-btevTr-disabled-true'
    )
  })

  it('should render the button with the spinner and loading', () => {
    render(<Button loading>Label</Button>)

    const button = screen.getByRole('button', { name: /label/i })
    expect(button).toBeInTheDocument()

    expect(button.getAttributeNode('class')).toHaveTextContent(
      'c-hUiIRX-pAIqg-loading-true'
    )
  })
})
