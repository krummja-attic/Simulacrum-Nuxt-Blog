<template>
    <ul class="flex flex-wrap">

        <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
        >

            <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
            >

                <img
                v-if="article.img"
                class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
                :src="article.img"
                />

                <div class="desc-box p-5 flex flex-col xxlmin:w-1/2 xxlmax:w-full">
                    <h2 class="text-lg font-bold">{{ article.title }}</h2>
                    <p class="date">{{ formatDate(article.createdAt) }}</p>
                    <p class="desc fade">{{ article.description }}</p>
                </div>

            </NuxtLink>

        </li>

    </ul>
</template>

<script>
export default {
    props: {
        articles: Array
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
.article-card {
    border-radius: 8px;
    text-align: justify;

  a {
    border-radius: 8px;
  }

  img {
    div {
      border-radius: 8px 0 0 8px;
    }
  }

  &:hover h2 {
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
    font-style: italic;
    overflow: hidden;
}

.fade {
    position: relative;
    height: 6em;
}

.fade:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(247, 243, 239, 1) 50%);
}
</style>
