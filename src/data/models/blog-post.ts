export interface BlogPost {
  id: string
  time: string
  title: string
  content: string | TrustedHTML
}
