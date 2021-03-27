<template>
    <div>
        <h1 class="mb-6">Notebook</h1>

        <NotebookListing :notes="this.notes" :tags="this.tags" />

        <!-- <TagListing :tags="this.tags" /> -->
    </div>
</template>

<script>
import NotebookListing from '@/components/NotebookListing';
import TagListing from '@/components/TagListing';

export default {
    components: {
        NotebookListing,
        TagListing
    },
    async asyncData({ $content, params })
    {
        const notes = await $content('notes', params.slug)
        .only(['title', 'description', 'createdAt', 'img', 'slug'])
        .sortBy('createdAt')
        .fetch()

        const tags = await $content('tags', params.slug)
            .only(['name', 'slug'])
            .sortBy('createdAt', 'asc')
            .fetch()

        return {
            notes,
            tags
        }
    }
}
</script>

<style scoped>
h1 {
    color: rgba(75, 60, 90, 0.8);
    padding: 10px 0;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.4em;
}
</style>
