import { Text } from '@/presentation/components/atoms/Text'
import { ArticleContainer, ArticleTitle, VideoIFrame, VideoWrapper } from './styles'

export function VanillaArticle() {
  return (
    <ArticleContainer>
      <ArticleTitle>Vanilla Extract: Create zero-runtime style sheets</ArticleTitle>
      <VideoWrapper>
        <VideoIFrame
          src="https://www.youtube.com/embed/SeVF1OFy5_I"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
          allowFullScreen
        />
      </VideoWrapper>
      <Text>
        Vanilla Extract is a CSS framework that lets you create class styles with TypeScript.
        It combines the utility class approach of something like Tailwind with the type-safety of TypeScript,
        allowing you to create your own custom yet consistent styles. Styles generated by Vanilla Extract are
        locally scoped, and compile to a single stylesheet at build time.
      </Text>
    </ArticleContainer>
  )
}
