import type { Meta, StoryObj } from '@storybook/react'

import { Hero, type HeroProps } from '../../components/atoms/Hero'
import heroImg from '@/presentation/assets/hero.png'


export default {
  title: 'Atoms/Hero',
  component: Hero,
  args: {
    src: heroImg
  }
} as Meta<HeroProps>

export const Default: StoryObj<HeroProps> = {}

export const Secondary: StoryObj<HeroProps> = {
  args: {
    secondary: true
  }
}
