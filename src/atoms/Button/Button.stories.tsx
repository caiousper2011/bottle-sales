import type { Meta, StoryFn } from '@storybook/react'
import { Button, ButtonProps } from './index'
import { Title, Description, Primary as PrimaryStory, Controls, Stories } from '@storybook/blocks'

const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Button</Title>
          <Description>This compoenent is a button that is shared with the whole project</Description>
          <PrimaryStory />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    variant: {
      description: 'Defines the component style',
    },
    asChild: {
      description: "If it's true, then the children will be rendered instead the default element",
    },
    children: {
      description: 'Value of the button, but if the asChild is true, then the content here will be rendered as main element',
    },
  },
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
