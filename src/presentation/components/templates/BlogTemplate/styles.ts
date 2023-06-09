import { styled } from '@/presentation/styles/stitches.config'
import { PostSummary as PostItemComponent } from '../../molecules/PostSummary'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: 1120,
  margin: '2rem auto',
  padding: '0 2rem'
})

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end'
})

export const PostContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem'
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
