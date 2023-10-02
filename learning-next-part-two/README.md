**Involved Pages**: pages/posts/index.js, pages/posts/[postId].js

- `fallback: "blocking"`: This mode is similar to `fallback: true`, but with a slight difference. When set to "blocking," Next.js will still serve a "fallback" version of the page for routes that aren't in the `paths` array, but it won't show the page until the server has finished generating the actual page. This can be useful for SEO, as the page will not be visible until it's fully generated, ensuring that search engines see the final content.
