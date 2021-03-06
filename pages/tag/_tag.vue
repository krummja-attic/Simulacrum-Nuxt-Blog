<template>
    <div class="flex lg:h-100 w-100 xs:flex-col lg:flex-col">
        <h1 class="text-4xl mb-10 font-bold">#{{ tag.name }}</h1>

        <h3 class="mb-4 font-bold text-3xl">Blog posts</h3>

            <ul class="flex flex-wrap">
                <li
                v-for="article in articles"
                :key="article.slug"
                class="ws:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
                >

                    <NuxtLink
                    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                    class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
                    >

                        <div class="p-6 flex flex-col justify-between">
                            <h2 class="font-bold">{{ article.title }}</h2>
                            <p>{{ article.description }}</p>
                            <p class="font-bold text-gray-600 text-sm">
                                Last updated {{ formatDate(article.updatedAt) }}
                            </p>
                        </div>

                    </NuxtLink>

                </li>
            </ul>

        <h3 class="mb-4 font-bold text-3xl">Notebook pages</h3>

            <ul class="flex flex-wrap">
                <li
                v-for="note in notes"
                :key="note.slug"
                class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
                >

                    <NuxtLink
                    :to="{ name: 'notebook-slug', params: { slug: note.slug } }"
                    class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
                    >

                        <div class="desc-box p-5 flex flex-col justify-between">
                            <h2 class="font-bold">{{ note.title }}</h2>
                            <p>{{ note.description }}</p>
                            <p class="font-bold text-gray-600 text-sm">
                                Last updated {{ formatDate(note.updatedAt) }}
                            </p>
                        </div>

                    </NuxtLink>

                </li>
            </ul>

    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const tags = await $content('tags')
            .where({ slug: { $contains: params.tag } })
            .limit(1)
            .fetch();

        const tag = tags.length > 0 ? tags[0] : {};

        const articles = await $content('articles', params.slug)
            .where({ tags: { $contains: tag.name } })
            .sortBy('createdAt', 'asc')
            .fetch();

        const notes = await $content('notes', params.slug)
            .where({ tags: { $contains: tag.name } })
            .sortBy('createdAt', 'asc')
            .fetch();

        return { articles, notes, tag };
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
    color: rgba(200, 0, 0, 0.9)
}
</style>
