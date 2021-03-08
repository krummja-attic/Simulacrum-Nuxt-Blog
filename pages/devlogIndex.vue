<template>
    <div>
        <h1 class="mb-6">Development Logs</h1>

        <DevlogListing :logs="this.logs" :tags="this.tags" />

    </div>
</template>

<script>
import DevlogListing from '@/components/DevlogListing';
import TagListing from '@/components/TagListing';

export default {
    components: {
        DevlogListing,
        TagListing
    },
    async asyncData({ $content, params })
    {
        const logs = await $content('logs', params.slug)
        .only(['title', 'description', 'project', 'createdAt', 'img', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()

        const tags = await $content('tags', params.slug)
            .only(['name', 'slug'])
            .sortBy('createdAt', 'asc')
            .fetch()

        return {
            logs,
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
