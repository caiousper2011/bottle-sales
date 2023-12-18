import type { Meta, StoryFn } from '@storybook/react'
import { Wrapper, WrapperProps } from './index'
import { Title, Description, Primary, Controls, Stories } from '@storybook/blocks'

const meta: Meta<WrapperProps> = {
  title: 'Atoms/Wrapper',
  component: Wrapper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Container component</Title>
          <Description>This component must create a container around its children, so that the content is aligned</Description>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
}

export default meta
type Story = StoryFn<WrapperProps>

const Template: Story = (args: any) => <Wrapper {...args} />

export const Sample = Template.bind({})
Sample.args = {
  children: <div>content</div>,
}
