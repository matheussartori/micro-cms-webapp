import { Hero } from '@/presentation/components/atoms/Hero'
import { Text } from '@/presentation/components/atoms/Text'
import vitestHeroImg from '@/presentation/assets/vitest.jpg'

export function ViteArticle() {
  return (
    <div>
      <Text>
        Given Jest's massive adoption, Vitest provides a compatible API that allows you to use it as a drop-in
        replacement in most projects. It also includes the most common features required when setting up your
        unit tests (mocking, snapshots, coverage). Vitest cares a lot about performance and uses Worker threads
        to run as much as possible in parallel. Some ports have seen test running an order of magnitude faster.
        Watch mode is enabled by default, aligning itself with the way Vite pushes for a dev first experience.
        Even with all these improvements in DX, Vitest stays lightweight by carefully choosing its dependencies
        (or directly inlining needed pieces).
      </Text>
      <Hero src={vitestHeroImg} />
    </div>
  )
}
