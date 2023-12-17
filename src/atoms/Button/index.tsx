import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes } from 'react'

const button = tv({
  base: [
    'py-2 uppercase font-medium px-4 rounded-lg shadow-sm transition-colors duration-200',
  ],
  variants: {
    variant: {
      primary:
        'text-black bg-white hover:bg-zinc-200',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
}

export function Button ({ asChild, variant, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      {...props}
      className={button({ variant, className })}
    />
  )
}
