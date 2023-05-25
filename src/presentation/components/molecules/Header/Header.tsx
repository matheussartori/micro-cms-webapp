import { Logo } from '../../atoms/Logo'
import { MenuItem } from '../../atoms/MenuItem'
import { Container, Content, Navigation } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <Navigation>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/blog">Blog</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
        </Navigation>
      </Content>
    </Container>
  )
}
