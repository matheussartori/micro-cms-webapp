import { Button } from '../../atoms/Button'
import { TextInput } from '../../atoms/TextInput'
import { Container } from './styles'

export function SearchBar() {
  return (
    <Container data-testid="searchbar">
      <TextInput
        containerCss={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }}
        placeholder='Search for blog posts...'
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
