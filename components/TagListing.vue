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
                    <span
                    class="
                    px-2 py-1
                    rounded-full border border-light-border dark:border-dark-border
                    transition-colors duration-300 ease-linear
                    truncate tracking-wider font-medium text-ss
                    ">
                        {{ tag.name }}
                    </span>
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

<style scoped>
/* .tag {
    color: rgba(75, 60, 90, 1.0);
    text-decoration: none;
    font-weight: 600;
    box-shadow: inset 0 -.125em 0 0 #fff,inset 0 -.375em 0 0 rgba(115, 90, 140, 0.45);
} */
</style>
