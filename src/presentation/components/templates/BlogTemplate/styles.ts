import { styled } from '@/presentation/styles/stitches.config.ts'
import { PostItem as PostItemComponent } from '../../molecules/PostItem'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  maxWidth: 1120,
  margin: '5rem auto'
})

export const PostItem = styled(PostItemComponent, {
  '& + div': {
    '&::before': {
      content: '',
      width: '100%',
      border: '1px solid $gray800',
      position: 'relative',
      bottom: 40
    }
  }
})
