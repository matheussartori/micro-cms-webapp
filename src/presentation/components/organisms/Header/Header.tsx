import { Logo } from '../../atoms/Logo'
import { MenuItem } from '../../atoms/MenuItem'
import { SearchBar } from '../../molecules/SearchBar'
import { Container, WideContent, Navigation, MobileContent } from './styles'

export function Header() {
  return (
    <Container data-testid="header">
      <WideContent>
        <Logo />
        <Navigation>
          <MenuItem to="/" end>Home</MenuItem>
          <MenuItem to="/about" end>About</MenuItem>
          <MenuItem to="/blog" end>Blog</MenuItem>
          <MenuItem to="/contact" end>Contact</MenuItem>
        </Navigation>
        <SearchBar />
      </WideContent>
      <MobileContent>
        <Logo />
      </MobileContent>
    </Container>
  )
}
