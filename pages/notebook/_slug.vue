<template>
  <div>

    <div class="note px-2 xs:w-full md:w-full xs:mb-6 md:mb-12">

      <TagList :content="note" :tags="tags" />

        <div class="note-header">

          <h1 class="note-title tracking-wide font-bold xs:text-2xl md:text-3xl xs:my-4 md:my-8">
            {{ note.title }}
          </h1>

          <div class="xs:my-2 md:my-8">
            {{ formatDate(note.createdAt) }}
          </div>

        </div>

        <div class="
        note-body
        sm:mx-1
        md:mx-16
        lg:mx-32
        xl:mx-64
        ">

          <div class="
          abstract
          sm:mx-8
          md:mx-8
          lg:mx-16
          xl:mx-24
          ">
            <hr class="mb-2"/>
              {{ note.description }}
            <hr class="mt-2"/>
          </div>

          <nuxt-content :document="note" />

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
        const note = await $content('notes', params.slug).fetch();

        const tagsList = await $content('tags')
            .only(['name', 'slug'])
            .where({ name: { $containsAny: note.tags } })
            .fetch()

        const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))

        return { note, tags };
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
.note-header {
    text-align: center;
}

.abstract {
    text-align: justify;
    font-style: italic;
}

.note {
    text-align: justify;
}
</style>
