<template>
  <div>
    <div class="article xs:w-full md:w-full px-2 xs:mb-6 md:mb-12">

      <TagList :content="article" :tags="tags" />

      <div class="article-header">
        <h1 class="article-title xs:text-2xl md:text-3xl xs:my-4 md:my-8">
          {{ article.title }}
        </h1>
        <div class="xs:my-2 md:my-8">
          {{ formatDate(article.createdAt) }}
        </div>
      </div>

      <div class="article-body
        sm:mx-1    md:mx-16     lg:mx-32    xl:mx-64
        sm:text-sm md:text-base lg:text-lg  xl:text-xl
      ">

        <div class="abstract my-10 sm:mx-8 md:mx-8 lg:mx-16 xl:mx-24">
          <hr class="mb-2" />
            {{ article.description }}
          <hr class="mt-2" />
        </div>

        <nuxt-content :document="article" />

      </div>

    </div>
  </div>
</template>

<script>
import TagList from '@/components/TagList';

export default {
  components: {
      TagList
  },

  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();

    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()

    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))

    return { article, tags };
  },

  methods: {
    formatDate(date)
    {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
  }
}
</script>

<style>
.article-header {
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.025em;
}

.abstract {
    text-align: justify;
    font-style: italic;
}

.article {
    text-align: justify;
}

.article-title {
    color: rgba(75, 60, 90, 0.8);
}
</style>
