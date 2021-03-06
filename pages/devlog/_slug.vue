<template>
  <div>

    <div class="log xs:w-full md:w-full px-2 xs:mb-6 md:mb-12">

      <TagList :content="log" :tags="tags" />

      <div class="log-header">
        <h1 class="log-title tracking-wide font-bold xs:text-2xl md:text-3xl xs:my-4 md:my-8">
          {{ log.title }}
        </h1>

        <div class="xs:my-2 md:my-8">
          {{ formatDate(log.createdAt) }}
        </div>
      </div>

      <div class="log-body sm:mx-1 md:mx-16 lg:mx-32 xl:mx-64">
        <nuxt-content :document="log" />
      </div>

    </div>
  </div>
</template>

<script>
import TagList from '@/components/TagList'

export default {
  components: {
    TagList
  },

  async asyncData ({ $content, params }) {
    const log = await $content('logs', params.slug).fetch();

    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: log.tags } })
      .fetch()

    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))

    return { log, tags };
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
.log-header {
  text-align: center;
}

.abstract {
  text-align: justify;
  font-style: italic;
}

.log {
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
  line-height: 20pt;
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
  padding-left: 30px;
  text-indent: -30px;
}
</style>
