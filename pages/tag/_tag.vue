<template>
    <div class="flex lg:h-screen w-screen xs:flex-col lg:flex-row">
        <h1 class="text-4xl font-bold uppercase">{{ tag.name }}</h1>
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

        return { articles, tag };
    }
}
</script>
