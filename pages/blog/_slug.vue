<template>
    <div>

        <div class="article my-12 px-10">

            <div class="article-header mb-10">
                <h1 class="article-title text-3xl tracking-wide">
                    {{ article.title }}
                </h1>
                <div>{{ formatDate(article.createdAt) }}</div>
                <div class="abstract my-3">{{ article.description }}</div>
                <hr />
            </div>

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
    },
    methods: {
        formatDate(date)
        {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString('en', options);
        }
    }
}
</script>


<style>
.article-header {
    text-align: center;
}

.abstract {
    text-align: justify;
    padding: 20px 40px;
}

.article {
    text-align: justify;
}
</style>
