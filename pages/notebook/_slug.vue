<template>
    <div>

        <div class="
            note
            xs:w-full md:w-full px-2
            xs:mb-6 md:mb-12
        ">

            <div class="note-header">

                <h1 class="
                    note-title
                    tracking-wide font-bold
                    xs:text-2xl md:text-3xl
                    xs:my-4 md:my-8
                ">
                    {{ note.title }}
                </h1>

                <div class="xs:my-2 md:my-8">
                    {{ formatDate(note.createdAt) }}
                </div>

            </div>

            <div class="
                note-body
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
                    {{ note.description }}
                    <hr class="mt-2"/>
                </div>

                <!-- <hr class="my-4" /> -->

                <nuxt-content :document="note" />

            </div>
        </div>

    </div>
</template>


<script>
export default {
    async asyncData ({ $content, params }) {
        const note = await $content('notes', params.slug).fetch();
        return { note };
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
.note-header {
    text-align: center;
}

.abstract {
    text-align: justify;
    font-style: italic;
}

.note {
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
    padding-left: 30px;
    text-indent: -30px;
}
</style>
