<template>
  <div>
    <NuxtLink to="/">
      <div>
        <img class="logo w-16 xs:w-24 sm:w-24 md:w-32 lg:w-48 xl:w-48" src="/logo.svg">
      </div>

      <h1 class="title xs:text-3xl md:text-5xl font-bold tracking-wide">
          Simulacrum
      </h1>

      <h2 class="title md:mb-8 xs:text-xl md:text-xl">Jonathan Crum's digital garden</h2>
    </NuxtLink>
  </div>
</template>

<style scoped>
.title {
    color: rgba(75, 60, 90, 0.8);
}

.logo {
  color: rgba(75, 60, 90, 0.8);
  display: block;
  margin: 24px auto 4px auto;
}
</style>
