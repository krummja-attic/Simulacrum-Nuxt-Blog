<template>
  <div class="layout-grid">
    <h1 class="col-start-2 col-end-6">{{ tag.title }}</h1>
    <div class="garden">
      <NuxtLink
      v-for="article of articles"
      :key="article.slug"
      :to="{ name: 'garden-slug', params: { slug: article.slug } }"
      class="plot-wrapper"
      >
        <GardenPlot :article=article />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import GardenPlot from '@/components/GardenPlot'

export default {
  components: {
    GardenPlot
  },
  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles', params.slug)
      .where({ tags: { $contains: tag.title } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tag
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 40px;
  text-align: left;
  font-family: 'Raleway', sans-serif;
  font-size: 36pt;
  font-weight: 700;
}

.garden {
  @apply col-start-2 col-end-12;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 2em;

  .plot-wrapper {
    width: 265px;
  }
}
</style>
