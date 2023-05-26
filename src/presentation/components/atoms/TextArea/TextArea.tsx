import { ComponentProps, ElementRef, forwardRef } from 'react'
import { TextArea as TextAreaComponent } from './styles'

export type TextAreaProps = ComponentProps<typeof TextAreaComponent>

export const TextArea = forwardRef<ElementRef<typeof TextAreaComponent>, TextAreaProps>(
  ({ ...props }: TextAreaProps, ref) => {
    return (
      <TextAreaComponent ref={ref} {...props} />
    )
  }
)
