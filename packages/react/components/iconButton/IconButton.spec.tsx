import { act } from 'react-dom/test-utils'
import { IconButton } from './IconButton'
import { PersonIcon } from '@radix-ui/react-icons'
import ReactDOM from 'react-dom'

let container: HTMLDivElement | any

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

describe('<IconButton />', () => {
  it('should render the button with class ".c-hMEaOj" and the icon SVG', () => {
    act(() => {
      ReactDOM.render(
        <IconButton>
          <PersonIcon />
        </IconButton>,
        container
      )
    })
    const button = container.querySelector('button')
    const classe = container.querySelector('.c-hMEaOj')
    const svg = container.querySelector('svg')

    expect(button).toBeInTheDocument()
    expect(classe).toBeInTheDocument()
    expect(svg).toBeInTheDocument()
  })
})
