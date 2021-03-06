<template>
  <div>

    <h1 class="mb-6">Blog Posts</h1>

    <ArticleListing :articles="articles" />

    <TagListing :tags="tags" />

  </div>
</template>

<script>
import ArticleListing from '@/components/ArticleListing';
import TagListing from '@/components/TagListing';

export default {
    components: {
      ArticleListing,
      TagListing
    },

    async asyncData({ $content, params })
    {
        const articles = await $content('articles', params.slug)
          .only(['title', 'description', 'createdAt', 'img', 'slug'])
          .sortBy('createdAt', 'desc')
          .fetch()

        const tags = await $content('tags', params.slug)
          .only(['name', 'slug'])
          .sortBy('createdAt', 'asc')
          .fetch()

        return {
            articles,
            tags
        }
    }
}
</script>

<style scoped>
h1 {
  padding: 10px 0;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.4em;
}
</style>
