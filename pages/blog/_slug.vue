<template>
    <div>

        <div class="article my-12 p-10">

            <h1 class="article-title tracking-wide">
                {{ article.title }}
            </h1>

            <nuxt-content :document="article" />

        </div>

    </div>
</template>


<script>
import Header from '@/components/Header';

export default {
    components: {
        Header
    },
    async asyncData ({ $content, params }) {
        const article = await $content('articles', params.slug).fetch();
        return { article };
    }
}
</script>


<style>
.article {
    text-align: justify;
}
</style>
