import type { Meta, StoryFn } from '@storybook/react'
import { Header, HeaderProps } from './index'

const meta: Meta<HeaderProps> = {
  title: 'Molecules/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta
type Story = StoryFn<HeaderProps>

const Template: Story = (args: any) => <Header {...args} />

export const Sample = Template.bind({})
