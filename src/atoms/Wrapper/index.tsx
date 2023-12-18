import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes } from 'react'

const wrapper = tv({
  base: [
    'p-4 md:p-8 w-full md:max-w-7xl bg-red-500 m-auto',
  ],
})

export interface WrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wrapper> {
  asChild?: boolean
}

export const Wrapper = ({ asChild, className, ...props }: WrapperProps) => {
  const Component = asChild ? Slot : 'div'

  return (
    <Component
      {...props}
      className={wrapper({ className })}
    />
  )
}
