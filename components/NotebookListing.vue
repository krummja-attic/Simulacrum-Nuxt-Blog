<template>
    <ul class="flex flex-wrap">
        <li
        v-for="note of notes"
        :key="note.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
        >

            <NuxtLink
            :to="{ name: 'notebook-slug', params: { slug: note.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
            >

                <div class="desc-box p-5 px-5 flex flex-col">
                    <h2 class="text-lg font-bold">{{ note.title }}</h2>
                    <p class="date">{{ formatDate(note.createdAt) }}</p>
                    <p class="desc fade">{{ note.description }}</p>
                </div>

            </NuxtLink>

        </li>
    </ul>
</template>


<script>
export default {
    props: {
        notes: Array,
        tags: Array,
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


<style scoped>
.article-card {
    border-radius: 8px;
    text-align: justify;
}

.article-card a {
    border-radius: 8px;
}

.article-card img div {
    border-radius: 8px 0 0 8px;
}

.article-card:hover h2 {
    color: rgba(200, 0, 0, 0.9)
}

.date {
    color: #808080;
}

.desc {
    width: 100%;
    color: #404040;
    padding-top: 5px;
    padding-right: 5px;
    font-style: italic;
    overflow: hidden;
}

.fade {
    position: relative;
    height: 6em;
}

.fade:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(247, 243, 239, 1) 50%);
}
</style>
