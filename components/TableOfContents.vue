<template>
    <div class="container">
        <ul>
            <li
            v-for="link of log.toc"
            :key="link.id"
            :class="{ 'toc3': link.depth === 3 }"
            >
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        log: Object
    }
}
</script>

<style scoped>
.container {
    float: left;
    position: sticky;
    top: 0;
    left: 0;
    width: auto;
    text-align: left;
}
</style>
