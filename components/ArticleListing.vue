<template>
    <ul class="flex flex-wrap">

        <li v-for="article of articles"
            :key="article.slug"
            class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card">

        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  class="flex m-4 px-4 py-2 shadow-sm xxlmax:flex-col">

            <div class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full">
                <h2 class="font-bold">{{ article.title }}</h2>
                <p class="date">{{ formatDate(article.createdAt) }}</p>
                <p class="desc">{{ article.description }}</p>
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


<style scoped>
.article-card {
    border-radius: 8px;
    text-align: justify;
}

.article-card a {
    border-radius: 8px;
}

.date {
    color: #808080;
}

.desc {
    padding-top: 5px;
    font-style: italic;
}
</style>
