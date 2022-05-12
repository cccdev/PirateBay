import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'class',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button Component', () => {
  // 测试默认按钮是否可以正常渲染
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>nice</Button>)
    const el = wrapper.getByText('nice') as HTMLButtonElement
    expect(el).toBeInTheDocument()

    expect(el.tagName).toEqual('BUTTON')
    expect(el).toHaveClass('btn btn-default')
    expect(el.disabled).toBeFalsy()

    fireEvent.click(el)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  // 测试传入不同props是否可以正常渲染
  it('should render the correct component based on different pops', () => {
    const wrapper = render(<Button {...testProps}>nice</Button>)
    const el = wrapper.getByText('nice')
    expect(el).toBeInTheDocument()

    expect(el).toHaveClass('btn-primary btn-lg class')
  })

  // LinkButton是否可以正常渲染
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="www.baidu.com">Link</Button>)
    const el = wrapper.getByText('Link')
    expect(el).toBeInTheDocument()

    expect(el.tagName).toEqual('A')
    expect(el).toHaveClass('btn btn-link')
  })

  // 测试 disabled 是否正常
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>nice</Button>)
    const el = wrapper.getByText('nice') as HTMLButtonElement
    expect(el).toBeInTheDocument()

    expect(el.disabled).toBeTruthy()
    fireEvent.click(el)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })

})

