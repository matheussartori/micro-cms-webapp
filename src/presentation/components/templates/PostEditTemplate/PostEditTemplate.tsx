import { useRef } from 'react'
import { FloppyDisk } from '@phosphor-icons/react'

import { Box, Container } from './styles'
import { TextInput } from '../../atoms/TextInput'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import { TextArea } from '../../atoms/TextArea'

export interface OnSaveParams {
  id?: string
  time?: Date
  title: string
  content: string
}

export interface PostEditTemplateProps {
  onSave: (data: OnSaveParams) => void
  id?: string
  time?: number
  title?: string
  content?: string
}

export function PostEditTemplate({ id, title, content, onSave }: PostEditTemplateProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)

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
        <TextInput ref={titleRef} defaultValue={title ?? ''} required />
      </Box>

      <Box>
        <Text as="h2">Content</Text>
        <TextArea ref={contentRef} defaultValue={content ?? ''} required />
      </Box>

      <Button data-testid="button-save-post">
        <FloppyDisk />
        Save Post
      </Button>
    </Container>
  )
}
