import { useRef } from 'react'
import { FloppyDisk } from '@phosphor-icons/react'

import { Box, Container } from './styles'
import { TextInput } from '../../atoms/TextInput'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'

export interface OnSaveParams {
  id?: string
  time?: string
  title: string
  content: string
}

export interface PostEditTemplateProps {
  onSave: (data: OnSaveParams) => void
  id?: string
  title?: string
  content?: string
}

export function PostEditTemplate({ id, title, content, onSave }: PostEditTemplateProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    onSave({
      id,
      title: String(titleRef.current?.value),
      content: String(contentRef.current?.value)
    })
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Box>
        <Text as="h2">Title</Text>
        <TextInput ref={titleRef} defaultValue={title ?? ''} />
      </Box>

      <Box>
        <Text as="h2">Content</Text>
        <TextInput ref={contentRef} defaultValue={content ?? ''} />
      </Box>

      <Button data-testid="button-save-post">
        <FloppyDisk />
        Save Post
      </Button>
    </Container>
  )
}
