import { Text } from '@/presentation/components/atoms/Text'
import { ContactTemplate } from '@/presentation/components/templates/ContactTemplate'
import { Link, Title } from './styles'

export function Contact() {
  return (
    <ContactTemplate
      imageUrl="https://github.com/matheussartori.png"
    >
      <Title as="h2">Developed by Matheus Sartori</Title>
      <Text>E-mail: <Link href="mailto:ms.sartori@outlook.com.br">ms.sartori@outlook.com.br</Link></Text>
      <Text>Github: <Link href="https://github.com/matheussartori" target="_blank">matheussartori</Link></Text>
      <Text>LinkedIn: <Link href="https://linkedin.com/in/mssartori" target="_blank">mssartori</Link></Text>
    </ContactTemplate>
  )
}
