import logoImg from '@/presentation/assets/logo.png'
import { LogoImg } from './styles'

export function Logo() {
  return (
    <div>
      <LogoImg data-testid="logo" src={logoImg} alt="Micro CMS" />
    </div>
  )
}
