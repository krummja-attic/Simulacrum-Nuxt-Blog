<template>
  <div class="layout-grid">
    <div class="header flex flex-row">
      <NuxtLink to="/">
        <div class="logo-wrapper">
          <img class="logo" src="/logo.svg">
          <img class="logo-alt" src="/logo_purple.svg">
        </div>
      </NuxtLink>

      <div class="navbar flex flex-row">
        <NuxtLink
          class="navitem"
          active-class="navitem-active"
          :class="{'navitem-secondary': this.$route.path != '/'}"
          to="/">
            home
        </NuxtLink>

        <NuxtLink
          class="navitem"
          active-class="navitem-active"
          :class="{'navitem-secondary': this.$route.path != '/gardenIndex'}"
          to="/gardenIndex">
            digital garden
        </NuxtLink>

        <NuxtLink
          class="navitem"
          active-class="navitem-active"
          :class="{'navitem-secondary': this.$route.path != '/notebook'}"
          to="/notebook">
            notebook
        </NuxtLink>

        <NuxtLink
          class="navitem"
          active-class="navitem-active"
          :class="{'navitem-secondary': this.$route.path != '/about'}"
          to="/about">
            about
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;500;700&display=swap');

.header {
  @apply col-start-2 col-end-12;
  @apply mt-3 mb-10;

  height: 68px;
  justify-content: space-between;
  border-bottom: 2px solid rgba(42, 42, 42, 0.5);

  .logo-wrapper {
    position: relative;
    height: auto;
    width: 100px;
  }

  .logo-alt {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;

    transition: opacity 0.2s;
  }

  .logo-wrapper:hover .logo-alt {
    opacity: 1;
  }

  .navbar {
    position: relative;
    margin-top: 20px;
    height: 24px;
    width: 550px;
    justify-content: space-between;

    font-family: 'Raleway', sans-serif;
    font-size: 20pt;

    .navitem {
      @apply transition duration-200 ease-in-out;

      &:hover {
        text-shadow: 1px 0px 0px black;
      }
    }

    .navitem-active {
      font-weight: 700;
      box-shadow:
        0 4px 0 0 $papier,
        0 10px 0 0 $accent-purple-3;
    }

    .navitem-secondary {
      font-weight: 500;
      box-shadow: none;
    }
  }
}
</style>
