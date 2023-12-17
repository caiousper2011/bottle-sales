import type { Meta, StoryFn } from '@storybook/react'
import { Button, ButtonProps } from './index'

const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
}

export default meta
type Story = StoryFn<ButtonProps>

const Template: Story = (args: any) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
}

export const WithAsChild = Template.bind({})
WithAsChild.args = {
  variant: 'primary',
  asChild: true,
  children: <a href='/' onClick={e => e.preventDefault()}>Teste</a>,
}
