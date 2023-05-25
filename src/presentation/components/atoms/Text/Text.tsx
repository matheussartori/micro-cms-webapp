import { ComponentProps, ElementType, ReactNode } from 'react'
import { TextComponent } from './styles'

export interface TextProps extends ComponentProps<typeof TextComponent> {
  children?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' |'xl'
  as?: ElementType
  __dangerouslySetInnerHTML?: {
    html: string
  }
}

export function Text({ size = 'md', ...props}: TextProps) {
  return (
    <TextComponent size={size} {...props} />
  )
}
