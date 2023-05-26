import { List, X } from '@phosphor-icons/react'

import { Logo } from '../../atoms/Logo'
import { MenuItem } from '../../atoms/MenuItem'
import { SearchBar } from '../../molecules/SearchBar'
import { Container, WideContent, Navigation, MobileContent, MenuButton, MobileNavigation } from './styles'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

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
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X size={32} color="#FFF" />
          ) : (
            <List size={32} color="#FFF" />
          )}

        </MenuButton>
        <MobileNavigation css={{ display: isMenuOpen ? 'flex' : 'none'}}>
          <MenuItem to="/" end>Home</MenuItem>
          <MenuItem to="/about" end>About</MenuItem>
          <MenuItem to="/blog" end>Blog</MenuItem>
          <MenuItem to="/contact" end>Contact</MenuItem>
        </MobileNavigation>
        <Logo />
      </MobileContent>
    </Container>
  )
}
