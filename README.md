<h3 align="center">
  Micro CMS
</h3>

<blockquote align="center">
  MicroCMS is a lightweight CMS (Content Management System) built for simplicity and ease of use. It empowers users to create and edit posts, which are saved directly in the browser's local storage. With its intuitive interface and minimalistic design, TinyCMS offers a hassle-free solution for managing and publishing content without the need for complex setups or external databases.
</blockquote>
<br>

<p align="center">
  <a href="#how-to-run-locally">How to run locally</a><br>
  <a href="#site-structure">Site structure</a><br>
  <a href="#why-vite">Why vite?</a><br>
</p>

## How to run locally

You can run the micro CMS using docker:

```bash
docker compose up --build -d # Runs the micro CMS and storybook.
# or, in case that you have node installed
npm run docker:up
```

The micro CMS will run on the port `5173`, while the storybook will run on `6006`.

If you don't have docker or want to run directly via node, you can install the dependencies and run the application, or, the storybook.

```bash
npm install # Install the dependencies
npm run dev # Start the micro CMS
npm run storybook # Start the storybook
```
## Site structure
For the micro CMS, I've considered the structure (templates) for the website based on the following wireframes, which you can compare with the final results.

### Home
<img src="./.github/assets/wireframes/home.png" alt="Home">

### About
<img src="./.github/assets/wireframes/about.png" alt="About">

### Blog
<img src="./.github/assets/wireframes/blog.png" alt="Blog">

### Blog post
<img src="./.github/assets/wireframes/blog-post.png" alt="Blog PostModel">

### Blog post create/edit
<img src="./.github/assets/wireframes/blog-post-edit.png" alt="Blog PostModel Edit">

### Contact
<img src="./.github/assets/wireframes/contact.png" alt="Contact">

## Why vite?

I chose to package the project with Vite instead of using a framework like Next.js, despite its recommendation in the new React.js documentation. This decision was made to showcase my proficiency in pure React.js development, non-framework specific.
