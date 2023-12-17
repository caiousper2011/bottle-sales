import { Primary, WithAsChild } from './Button.stories'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('should reder button correctly with its props', async () => {
    const onClickMock = jest.fn()

    render(<Primary {...Primary.args} onClick={onClickMock} />)

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(button).toBeEnabled()
    expect(button).toHaveTextContent('Primary Button')
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('shoul render a tag', async () => {
    render(<WithAsChild {...WithAsChild.args} />)

    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
