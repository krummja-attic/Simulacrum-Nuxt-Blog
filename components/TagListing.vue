<template>
    <div>
        <h3 class="mb-4 font-bold text-2xl text-center">Topic Index</h3>
        <ul class="flex flex-wrap mb-4 text-center">
            <li
            v-for="tag of tags"
            :key="tag.slug"
            class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
            >
                <NuxtLink :to="`/tag/${tag.slug}`" class="">
                    <p class="font-bold text-gray-600 tracking-wider font-medium text-ss">
                        #{{ tag.name }}
                    </p>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tags: Array
    }
}
</script>
