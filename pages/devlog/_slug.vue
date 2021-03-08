<template>
  <div>
    <!-- <TableOfContents :log="log" /> -->

    <div class="log xs:w-full md:w-full px-2 xs:mb-6 md:mb-12">

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

      <div class="log-body
        xs: text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl
                    sm:mx-1    md:mx-16     lg:mx-32   xl:mx-64">
        <nuxt-content :document="log" />
      </div>

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

<style>
.log-header {
  /* display: inline-block; */
  text-align: center;
  width: 100%;
  float: right;
  clear: both;
  top: 0;
}

.log {
  text-align: justify;
}

.project-title a {
  color: rgba(75, 60, 90, 1.0);
  text-decoration: none;
  font-weight: 600;
  box-shadow: inset 0 -.2rem 0 0 #f7f3ef,inset 0 -.6rem 0 0 rgba(115, 90, 140, 0.25);
}

.nuxt-content {
  position: relative;
}

.nuxt-content pre {
  border-radius: 8px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  background: #ede5d9;
}

@screen xs {
  .nuxt-content code {
    @apply text-xs
  }
}

@screen sm {
  .nuxt-content code {
    @apply text-sm
  }
}

@screen md {
  .nuxt-content code {
    @apply text-base
  }
}

@screen lg {
  .nuxt-content code {
    @apply text-base
  }
}

.nuxt-content pre code {
  font-size: 12pt;
  border-radius: 0px;
  padding: 0;
  box-shadow: none;
  background: none;
}

@screen xs {
  .nuxt-content pre code {
    @apply text-xs
  }
}

@screen sm {
  .nuxt-content pre code {
    @apply text-sm
  }
}

@screen md {
  .nuxt-content pre code {
    @apply text-base
  }
}

@screen lg {
  .nuxt-content pre code {
    @apply text-base
  }
}

.nuxt-content pre code span.token.operator {
  background: none;
}

code {
  font-size: 12pt;
  border-radius: 8px;
  padding: 0 5px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  background: #ede5d9;
}

.nuxt-content a {
  color: rgba(75, 60, 90, 1.0);
  text-decoration: none;
  font-weight: 600;
  box-shadow: inset 0 -.225rem 0 0 #f7f3ef,inset 0 -.475rem 0 0 rgba(115, 90, 140, 0.25);
}

.nuxt-content h1 {
    color: rgba(75, 60, 90, 0.8);
    margin-top: 30px;
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content h2 {
    color: rgba(75, 60, 90, 0.8);
    margin-top: 30px;
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content h3 {
    color: rgba(75, 60, 90, 0.8);
    margin-top: 30px;
    font-weight: bold;
    font-size: 22px;
}

.nuxt-content h4 {
  color: rgba(75, 60, 90, 0.8);
  margin-top: 30px;
  font-style: italic;
  font-size: 20px;
}

.nuxt-content p {
    margin: 16px 0;
}

.nuxt-content ol {
    margin: 32px 0;
    padding: 0 60px;
    list-style-type: decimal;
}

.nuxt-content ul {
    margin: 32px 0;
    padding: 0 60px;
    list-style-type: circle;
}

.nuxt-content li {
    padding-left: 10px;
}

.dropcap {
    color: rgba(75, 60, 90, 0.80);
    float: left;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
}

.nuxt-content .footnote-ref {
    color: rgba(75, 60, 90, 1.0);
}

.nuxt-content .footnotes {
    margin-top: 40px;
}

.nuxt-content .footnotes::before {
    content: "Footnotes";
    color: rgba(75, 60, 90, 0.8);
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content .footnote-backref {
    margin-left: 6px;
    color: rgba(75, 60, 90, 1.0);
}

.nuxt-content .footnotes li {
    margin-top: 8px;
}
</style>
