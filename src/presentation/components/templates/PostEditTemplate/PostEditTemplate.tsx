import { PostModel } from '@/data/models/post-model.ts'
import { Container } from './styles'
import { TextInput } from '../../atoms/TextInput'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import { FloppyDisk } from '@phosphor-icons/react'

export type PostEditTemplateProps = PostModel

export function PostEditTemplate({ title, content }: PostEditTemplateProps) {
  return (
    <Container>
      <Text as="h2">Title</Text>
      <TextInput defaultValue={title} />

      <Text as="h2">Content</Text>
      <TextInput defaultValue={content} />

      <Button>
        <FloppyDisk />
        Save Post
      </Button>
    </Container>
  )
}
