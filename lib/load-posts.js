export async function loadPosts(blog) {
   
    const api = `https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/create-blog-entry`
    const [blogEntry, BlogEntries] = await Promise.all([
      fetch(`${api}/${blog}`).then((res) => res.json()),
      fetch(`${api}`).then((res) => res.json()),
    ])

    return {blogEntry, BlogEntries}
  }