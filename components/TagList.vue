<template>
    <div class="flex flex-row-reverse">
        <span v-for="(tag, id) in content.tags" :key="id">
            <NuxtLink :to="`/tag/${tags[tag].slug}`">
                <span
                    class="
                    tag-pill
                    px-2 py-1
                    rounded-full border border-light-border dark:border-dark-border
                    transition-colors duration-300 ease-linear
                    truncate uppercase tracking-wider font-medium text-ss
                ">
                    {{ tags[tag].name }}
                </span>
            </NuxtLink>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        content: Object,
        tags: Object
    }
}
</script>
