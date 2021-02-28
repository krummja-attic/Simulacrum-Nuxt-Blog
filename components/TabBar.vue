<template>
    <div class="flex flex-row">
        <NuxtLink
            class="tab"
            active-class="tab-primary"
            :class="{'tab-secondary': this.$route.path != '/',
                     'tab-ternary': this.$route.params.slug }"
            to="/">Blog</NuxtLink>
        <NuxtLink
            class="tab"
            active-class="tab-primary"
            :class="{'tab-secondary': this.$route.path != '/notebook'}"
            to="/notebook">Notebook</NuxtLink>
        <NuxtLink
            class="tab"
            active-class="tab-primary"
            :class="{'tab-secondary': this.$route.path != '/gamedev'}"
            to="/gamedev">Devlog</NuxtLink>
    </div>
</template>


<style scoped>
.tab-primary {
    font-weight: bold;
    background-color: #F7F3EF;
}

.tab-secondary {
    font-weight: normal;
    color: #5e5e5e;
    background-color: #c9c2b7;
}

.tab-ternary {
    font-weight: bold;
    background-color: #F7F3EF;
}

.tab {
    width: 120px;
    border-radius: 10px 10px 0 0;
    font-size: 1.2rem;
    font-variant: small-caps;
    text-transform: lowercase;
}
</style>
