<template>
  <ul class="flex flex-wrap">
    <li
      v-for="log of logs"
      :key="log.slug"
      class="xs:w-full md:w-1/3 px-2 xs:mb-6 md:mb-12 article-card"
    >

      <NuxtLink
        :to="{ name: 'devlog-slug', params: { slug: log.slug } }"
        class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
      >

        <div class="p-5 px-5 flex flex-col w-full">
          <div class="flex flex-row justify-between">
            <h2 class="text-lg font-bold">{{ log.title }}</h2>
            <h2 class="text-lg font-bold place-self-auto">{{ log.project }}</h2>
          </div>
          <p class="date">{{ formatDate(log.createdAt) }}</p>
          <p class="desc fade">{{ log.description }}</p>
        </div>

      </NuxtLink>

    </li>
  </ul>
</template>


<script>
export default {
  props: {
    logs: Array,
    tags: Array,
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


<style scoped>
.article-card {
  border-radius: 8px;
  text-align: justify;
}

.article-card a {
  border-radius: 8px;
}

.article-card img div {
  border-radius: 8px 0 0 8px;
}

.article-card:hover h2 {
  color: rgba(75, 60, 90, 0.8);
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
  height: 3.2em;
}

.fade:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40%;
  height: 1.2em;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(247, 243, 239, 1) 50%);
}
</style>
