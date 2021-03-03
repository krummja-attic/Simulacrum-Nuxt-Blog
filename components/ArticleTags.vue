<template>
    <ul class="flex flex-wrap mb-4 text-center">
        <li
            v-for="tag of tags"
            :key="tag.slug"
            class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
        >
            <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
                <p class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss">
                    {{ tag.name }}
                </p>
            </NuxtLink>
        </li>
    </ul>
</template>


<script>
export default {
    props: {
        tags: Array
    }
}
</script>
