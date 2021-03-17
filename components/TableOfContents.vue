<template>
  <div class="wrapper invisible xl:visible">
    <ul class="toc shadow-lg">
      <li
      @click="tableOfContentsHeadingClick(link)"
      v-for="link of log.toc"
      :key="link.id"
      :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3, 'toc4': link.depth === 4 }"
      >
        <NuxtLink :class="{
            'text-purple-900 hover:text-purple-600': link.id === currentlyActiveToc,
            'text-gray-600 hover:text-gray-900': link.id !== currentlyActiveToc
          }"
          class="transition-colors duration-75 text-base mb-2 block"
          :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    log: Object
  },
  data () {
    return {
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.5,
      }
    }
  },
  mounted () {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied.
    document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
      this.observer.observe(section);
    });
  },
  beforeDestroy () {
    this.observer.disconnect();
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id;
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: sticky;
  top: 30px;
}

.toc {
  position: absolute;
  text-align: left;
  left: -40px;
  padding: 20px 20px;
  background-color: $papier;
}

.toc2 {
  font-weight: bold;
}

.toc3 {
  padding-left: 10px;
}
</style>
