<template>
  <ul class="flex flex-wrap">
    <li
      v-for="note of notes"
      :key="note.slug"
      class="w-1/2 xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 px-2 xs:mb-6 md:mb-12 article-card"
    >

      <NuxtLink
        :to="{ name: 'notebook-slug', params: { slug: note.slug } }"
        class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
      >

        <div class="p-5 px-5 flex flex-col w-full">
          <div class="flex justify-between xs:flex-col sm:flex-col md:flex-row lg:flex-row">
              <h2 class="text-lg font-bold">{{ note.title }}</h2>
          </div>
          <p class="date">{{ formatDate(note.createdAt) }}</p>
          <p class="desc fade">{{ note.description }}</p>
        </div>

      </NuxtLink>

    </li>
  </ul>
</template>

<script>
export default {
  props: {
    notes: Array,
    tags: Array,
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
  }
}
</script>

<style lang="scss" scoped>
.article-card {
  border-radius: 8px;
  text-align: justify;

  a {
    border-radius: 8px;
  }

  img div {
    border-radius: 8px 0 0 8px;
  }

  :hover h2 {
    color: $accent-purple-2;
  }
}

.date {
  color: #808080;
}

.desc {
  width: 100%;
  color: #404040;
  padding-top: 5px;
  padding-right: 5px;
  font-style: italic;
  overflow: hidden;
}

.fade {
  position: relative;
  height: 1.8em;

  &::after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    height: 1.2em;
    background:
      linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(247, 243, 239, 1) 50%
      );
  }
}
</style>
