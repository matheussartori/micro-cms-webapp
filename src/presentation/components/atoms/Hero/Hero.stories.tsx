import type { Meta, StoryObj } from '@storybook/react'

import { Hero, type HeroProps } from './'
import heroImg from '@/presentation/assets/hero.png'


export default {
  title: 'Atoms/Hero',
  component: Hero,
  args: {
    src: heroImg
  }
} as Meta<HeroProps>

export const Default: StoryObj<HeroProps> = {}
