import { Logo } from '../../atoms/Logo'
import { MenuItem } from '../../atoms/MenuItem'
import { SearchBar } from '../../molecules/SearchBar'
import { Container, Content, Navigation } from './styles'

export function Header() {
  return (
    <Container data-testid="header">
      <Content>
        <Logo />
        <Navigation>
          <MenuItem to="/" end>Home</MenuItem>
          <MenuItem to="/about" end>About</MenuItem>
          <MenuItem to="/blog" end>Blog</MenuItem>
          <MenuItem to="/contact" end>Contact</MenuItem>
        </Navigation>
        <SearchBar />
      </Content>
    </Container>
  )
}
