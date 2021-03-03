<template>
    <div>
        <h1 class="mb-6">Notebook</h1>

        <NotebookListing :notes="notes" :tags="tags" />
    </div>
</template>


<script>
import NotebookListing from '@/components/NotebookListing';

export default {
    components: {
        NotebookListing,
    },
    async asyncData({ $content, params })
    {
        const notes = await $content('notes', params.slug)
        .only(['title', 'description', 'createdAt', 'img', 'slug'])
        .sortBy('createdAt')
        .fetch()

        // const tagsList = await $content('tags')
        // .only(['name', 'slug'])
        // .where({ name: { $containsAny: notes.tags } })
        // .fetch()

        // const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name] : s })))

        return {
            notes,
            // tags
        }
    }
}
</script>


<style scoped>
h1 {
    padding: 10px 0;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.4em;
}
</style>
