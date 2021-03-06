<template>
    <div class="flex flex-row">
        <NuxtLink
            class="tab"
            active-class="tab-primary"
            :class="{'tab-secondary': this.$route.path != '/',
                     'tab-ternary': this.$route.path == '/blog/' + this.$route.params.slug }"
            to="/">Blog</NuxtLink>
        <NuxtLink
            class="tab"
            active-class="tab-primary"
            :class="{'tab-secondary': this.$route.path != '/notebookIndex',
                     'tab-ternary': this.$route.path == '/notebook/' + this.$route.params.slug }"
            to="/notebookIndex">Notebook</NuxtLink>
        <NuxtLink
            class="tab"
            active-class="tab-primary"
            :class="{'tab-secondary': this.$route.path != '/devlogIndex',
                     'tab-ternary': this.$route.path == '/devlog/' + this.$route.params.slug }"
            to="/devlogIndex">Devlog</NuxtLink>
    </div>
</template>


<style scoped>
.tab-primary {
    font-weight: bold;
    color: #5e5e5e;
    background-color: #F7F3EF;
}

.tab-secondary {
    font-weight: normal;
    color: #5e5e5e;
    background-color: #c9c2b7;
}

.tab-ternary {
    font-weight: bold;
    color: #5e5e5e;
    background-color: #F7F3EF;
}

.tab {
    padding-top: 2px;
    width: 120px;
    height: 30px;
    border-radius: 10px 10px 0 0;
    font-size: 1.0rem;
}
</style>
