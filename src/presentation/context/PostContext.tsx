import { createContext } from 'react'
import { v4 as uuid } from 'uuid'

import { PostModel } from '@/data/models/post-model'
import { useLocalStorageState } from '@/presentation/hooks/useLocalStorageState'
import { CreatePostParams, PostContextData, PostProviderProps, UpdatePostParams } from './types'

export const PostContext = createContext<PostContextData>({} as PostContextData)

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useLocalStorageState<PostModel[]>('@microcms/posts', [
    {
      id: '14f05b98-8733-49fe-8cdb-f7bf71d8afbf',
      // eslint-disable-next-line quotes
      content: `
        <p>We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final,
        before they’re released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally.
        We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption
        of individual React features from the React release schedule.</p>

        <br />
        <hr />
        <br />

        <h2>tl;dr</h2>
        <br />

        <ul>
          <li>We’re introducing an officially supported Canary release channel for React. Since it’s officially supported,
          if any regressions land, we’ll treat them with a similar urgency to bugs in stable releases.</li>
          <li>Canaries let you start using individual new React features before they land in the semver-stable releases.</li>
          <li>Unlike the Experimental channel, React Canaries only include features that we reasonably believe to be
          ready for adoption. We encourage frameworks to consider bundling pinned Canary React releases.</li>
          <li>We will announce breaking changes and new features on our blog as they land in Canary releases.</li>
          <li>As always, React continues to follow semver for every Stable release.</li>
        </ul>
      `,
      time: Date.now(),
      title: 'React Canaries: Enabling Incremental Feature Rollout Outside Meta'
    },
    {
      id: 'f20edb22-f0df-4a3f-a218-7adc6a03bc65',
      // eslint-disable-next-line quotes
      content: `
        <p>In React Labs posts, we write about projects in active research and development. We’ve made significant progress
        on them since our last update, and we’d like to share what we learned.</p>

        <br />
        <hr />
        <br />

        <h2>React Server Components</h2>
        <br />

        <p>React Server Components (or RSC) is a new application architecture designed by the React team.</p>
        <p>We’ve first shared our research on RSC in an introductory talk and an RFC. To recap them, we are introducing
        a new kind of component—Server Components—that run ahead of time and are excluded from your JavaScript bundle.
        Server Components can run during the build, letting you read from the filesystem or fetch static content. They
        can also run on the server, letting you access your data layer without having to build an API. You can pass data
        by props from Server Components to the interactive Client Components in the browser.</p>
      `,
      time: Date.now(),
      title: 'React Labs: What We\'ve Been Working On - March 2023'
    }
  ])

  function findPostById(id: string): PostModel {
    const post = posts.find(post => post.id === id)

    if (!post) {
      throw new Error('Post not found.')
    }

    return post
  }

  function createPost({ content, time, title }: CreatePostParams): string {
    const post = {
      id: uuid(),
      content,
      time,
      title
    }

    setPosts([...posts, post])

    return post.id
  }

  function updatePost({ id, content, title }: UpdatePostParams): void {
    const postExists = findPostById(id)

    if (!postExists) {
      throw new Error('Post not found.')
    }

    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          content,
          title
        }
      }

      return post
    })

    setPosts(updatedPosts)
  }

  function searchPostsByTerm(term: string): PostModel[] {
    const filteredPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(term.toLowerCase()) || post.content.toLowerCase().includes(term.toLowerCase())
    })

    return filteredPosts
  }

  return (
    <PostContext.Provider value={{
      posts,
      findPostById,
      createPost,
      updatePost,
      searchPostsByTerm
    }}>
      {children}
    </PostContext.Provider>
  )
}
