<template>
  <div class="container">

    <TableOfContents :log="log" />

    <div class="log w-full px-2 xs:mb-6 md:mb-12">

      <!-- START HEADER -->
      <div class="log-header">
        <h1 class="log-title tracking-wide font-bold xs:text-2xl md:text-3xl xs:my-4 md:mt-8 mb-2">
          {{ log.title }}
        </h1>

        <h2 class="project-title tracking-wide font-bold xs:text-xl md:text-2xl">
          <a :href="log.repo">{{ log.project }}</a>
        </h2>

        <div class="xs:my-2 md:my-8">
          {{ formatDate(log.createdAt) }}
        </div>
      </div>
      <!-- END HEADER -->

      <!-- START BODY -->
      <div class="log-body
        xs:text-sm  sm:text-sm md:text-base lg:text-lg xl:text-xl
                    sm:mx-1    md:mx-16     lg:mx-32   xl:mx-64">
        <nuxt-content :document="log" />
      </div>
      <!-- END BODY -->

    </div>

  </div>
</template>

<script>
import TableOfContents from '@/components/TableOfContents'

export default {
  components: {
    TableOfContents
  },

  async asyncData ({ $content, params }) {
    const log = await $content('logs', params.slug).fetch();
    console.log(log.toc);
    return { log };
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

<style lang="scss" scoped>
.container {
  height: 100%;
}

.log-header {
  text-align: center;
  width: 100%;
}

.log {
  text-align: justify;
}

.log-title {
  color: rgba(75, 60, 90, 0.8);
}

.project-title a {
  color: rgba(75, 60, 90, 1);
  text-decoration: none;
  font-weight: 600;
  box-shadow: inset 0 -0.2rem 0 0 #f7f3ef, inset 0 -0.6rem 0 0 rgba(115, 90, 140, 0.25);
}

@screen xs {
  .nuxt-content pre code {
    @apply text-xs;
  }

  .nuxt-content code {
    @apply text-xs;
  }
}

@screen sm {
  .nuxt-content pre code {
    @apply text-sm;
  }

  .nuxt-content code {
    @apply text-sm;
  }
}

@screen md {
  .nuxt-content pre code {
    @apply text-base;
  }

  .nuxt-content code {
    @apply text-base;
  }
}

@screen lg {
  .nuxt-content pre code {
    @apply text-base;
  }

  .nuxt-content code {
    @apply text-base;
  }
}
</style>
