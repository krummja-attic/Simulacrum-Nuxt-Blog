<template>
  <ul class="flex flex-wrap">
    <li
    class="w-full px-2 xs:mb-6 md:mb-12 garden-plot"
    >
      <NuxtLink
      to="/"
      class="flex transition-shadow duration-500 ease-in-out shadow-md
      hover:shadow-lg xxlmax:flex-col"
      >

        <div class="p-5 flex flex-row justify-between xxlmin:w-full xxlmax:w-full">
          <h2 class="font-bold">Placeholder Title</h2>
          <h6 class="date">2021-03-24</h6>
        </div>

      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.garden-plot {
  border-radius: 8px;
  text-align: justify;

  a {
    border-radius: 8px;
  }

  .date {
    margin-left: 5px;
    text-align: right;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 11pt;
    color: $ash;
    transition: color 500ms;
  }

  &:hover .date {
    color: $nero;
  }

  h2 {
    font-family: 'Raleway', sans-serif;
    font-size: 16pt;
    text-align: left;
    color: $nero;
    transition: color 500ms;
  }

  &:hover h2 {
    color: $accent-purple-4;
  }
}
</style>
