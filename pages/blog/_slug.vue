<template>
  <div>

    <div class="
    article
    xs:w-full md:w-full px-2
    xs:mb-6 md:mb-12
    ">

        <TagList :content="article" :tags="tags" />

        <div class="article-header">

            <h1 class="
                article-title
                tracking-wide font-bold
                xs:text-2xl md:text-3xl
                xs:my-4 md:my-8
            ">
                {{ article.title }}
            </h1>

            <div class="xs:my-2 md:my-8">
                {{ formatDate(article.createdAt) }}
            </div>

        </div>

        <div class="
        article-body
        sm:mx-1 md:mx-16 lg:mx-32 xl:mx-64
        sm:text-sm md:text-base lg:text-lg xl:text-xl
        ">

          <div class="
          abstract
          sm:mx-8 my-10
          md:mx-8 my-10
          lg:mx-16 my-10
          xl:mx-24 my-10
          ">
            <hr class="mb-2"/>
              {{ article.description }}
            <hr class="mt-2"/>
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
}

.abstract {
    text-align: justify;
    font-style: italic;
}

.article {
    text-align: justify;
}

.nuxt-content h1 {
    margin-top: 30px;
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content h2 {
    margin-top: 30px;
    font-weight: bold;
    font-size: 22px;
}

.nuxt-content h3 {
    margin-top: 30px;
    font-style: italic;
    font-size: 20px;
}

.nuxt-content p {
    margin: 16px 0;
}

.nuxt-content .footnote-ref {
    color: red;
}

.nuxt-content .footnotes {
    margin-top: 40px;
}

.nuxt-content .footnotes::before {
    content: "References";
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content .footnote-backref {
    margin-left: 6px;
    color: red;
}

.nuxt-content .footnotes li {
    margin-top: 8px;
}

.nuxt-content ol {
    margin: 32px 0;
    list-style-type: decimal;
}

.nuxt-content ul {
    margin: 32px 0;
    list-style-type: circle;
}

.dropcap {
    color: hsl(295, 36%, 45%);
    float: left;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
}
</style>
