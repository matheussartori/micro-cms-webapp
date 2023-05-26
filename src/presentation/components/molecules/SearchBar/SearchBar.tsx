import Select, { SingleValue } from 'react-select'

import { Button } from '../../atoms/Button'
import { Container } from './styles'
import { useState } from 'react'
import { usePost } from '@/presentation/hooks/usePost'
import { useNavigate } from 'react-router-dom'
import { theme } from '@/presentation/styles/stitches.config'

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
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null
        }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            width: 194,
            height: 35,
            minHeight: 35,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            backgroundColor: String(theme.colors.gray800),
            border: 0,
            boxShadow: 'none'
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: String(theme.colors.gray800)
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            color: String(theme.colors.gray100),
            backgroundColor: String(theme.colors.gray800),
            '&:hover': {
              backgroundColor: String(theme.colors.gray700)
            }
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            color: String(theme.colors.gray100)
          })
        }}
        noOptionsMessage={() => {
          if (searchTerm.length >= 3) {
            return 'No posts found.'
          }

          return 'Type at least 3 characters to search.'
        }}
        options={options}
        inputValue={searchTerm}
        onInputChange={(e) => setSearchTerm(e)}
        placeholder="Search for posts..."
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
