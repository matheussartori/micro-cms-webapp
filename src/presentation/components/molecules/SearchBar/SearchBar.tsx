import Select, { SingleValue } from 'react-select'

import { Button } from '../../atoms/Button'
import { Container } from './styles'
import { useState } from 'react'
import { usePost } from '@/presentation/hooks/usePost'
import { useNavigate } from 'react-router-dom'

interface Options {
  value: string
  label: string
}

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const { searchPostsByTerm } = usePost()
  const navigate = useNavigate()

  let options: Options[] = []

  if (searchTerm.length >= 3) {
    const posts = searchPostsByTerm(searchTerm)

    options = posts.map((post) => ({
      value: post.id,
      label: post.title
    }))
  }

  function handleOnChange(post: SingleValue<Options>) {
    if (post) {
      navigate(`/blog/read/${post.value}`)
    }
  }

  return (
    <Container data-testid="searchbar">
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            width: 194,
            height: 35
          })
        }}
        options={options}
        inputValue={searchTerm}
        onInputChange={(e) => setSearchTerm(e)}
        placeholder="Search for blog posts..."
        onChange={handleOnChange}
        value={null}
      />
      <Button css={{
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }}>
        Search
      </Button>
    </Container>
  )
}
