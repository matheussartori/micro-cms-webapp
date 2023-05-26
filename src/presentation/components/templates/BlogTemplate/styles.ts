import { styled } from '@/presentation/styles/stitches.config.ts'
import { PostSummary as PostItemComponent } from '../../molecules/PostSummary'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  maxWidth: 1120,
  margin: '5rem auto'
})

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end'
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
