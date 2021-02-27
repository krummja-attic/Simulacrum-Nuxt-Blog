<template>
  <div>

    <h1>Blog Posts</h1>

    <ArticleListing :articles="articles" />

    <h1>My Notebook</h1>

    <h1>Tutorials and Guides</h1>

  </div>
</template>


<script>
import ArticleListing from '@/components/ArticleListing';
import Header from '@/components/Header';

export default {
    components: {
      ArticleListing,
      Header,
    },
    async asyncData({ $content, params })
    {
        const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'createdAt', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()

        return {
            articles
        }
    }
}
</script>


<style scoped>
h1 {
  padding: 10px 0;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.4em;
}
</style>
