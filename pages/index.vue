<template>
  <div>

    <h1 class="mb-6">Blog Posts</h1>

    <ArticleListing :articles="articles" />

  </div>
</template>


<script>
import ArticleListing from '@/components/ArticleListing';
import Header from '@/components/Header';
import { VueMathjax } from 'vue-mathjax';

export default {

    components: {
      ArticleListing,
      Header,
      'vue-mathjax': VueMathjax
    },

    async asyncData({ $content, params })
    {
        const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'createdAt', 'img', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()

        return {
            articles
        }
    },

    data () {
      return {
        formula: '$$\\lambda x . P(x) \\land Q(x, y)$$'
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
