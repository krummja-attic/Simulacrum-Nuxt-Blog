<template>
    <div>

        <div class="
            article
            xs:w-full md:w-full px-2
            xs:mb-6 md:mb-12
        ">

            <div class="article-header">

                <h1 class="
                    article-title
                    tracking-wide font-bold
                    xs:text-2xl md:text-3xl
                    xs:my-4 md:my-8
                ">
                    {{ article.title }}
                </h1>

                <div class="xs:my-2 md:my-8">
                    {{ formatDate(article.createdAt) }}
                </div>

            </div>

            <div class="
                article-body
                sm:mx-1
                md:mx-16
                lg:mx-32
                xl:mx-64
            ">

                <div class="
                    abstract
                    sm:mx-8
                    md:mx-8
                    lg:mx-16
                    xl:mx-24
                ">
                    <hr class="mb-2"/>
                    {{ article.description }}
                    <hr class="mt-2"/>
                </div>

                <!-- <hr class="my-4" /> -->

                <nuxt-content :document="article" />

            </div>
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
    font-style: italic;
}

.article {
    text-align: justify;
}

.nuxt-content h1 {
    margin-top: 30px;
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content h2 {
    margin-top: 30px;
    font-weight: bold;
    font-size: 22px;
}

.nuxt-content h3 {
    margin-top: 30px;
    font-style: italic;
    font-size: 20px;
}

.nuxt-content p {
    line-height: 20pt;
    margin: 16px 0;
}

.nuxt-content .footnote-ref {
    color: red;
}

.nuxt-content .footnotes {
    margin-top: 40px;
}

.nuxt-content .footnotes::before {
    content: "References";
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content .footnote-backref {
    margin-left: 6px;
    color: red;
}

.nuxt-content .footnotes li {
    margin-top: 8px;
}
</style>
