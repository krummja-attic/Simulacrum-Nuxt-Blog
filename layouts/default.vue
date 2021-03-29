<template>
  <div class="container mx-auto bg-transparent">
    <Header />
    <Nuxt />

    <div class="spacer"></div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'default',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

html {
  height: 100%;

  font-family: 'PT Serif', Georgia, Times, "Times New Roman", serif;
  background-color: $papier;
  color: $nero;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  body {
    height: 100%;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#__nuxt,
#__layout {
  height: 100%;
}

.container {
  @apply flex flex-col;

  height: 100%;
  text-align: center;
}

.layout-grid {
  @apply grid grid-cols-12 gap-6;

  .flex-shrink: 0;
}

.spacer {
  flex-grow: 1;
}

.nuxt-content {
  position: relative;

  a {
    color: $accent-purple-1;
    text-decoration: none;
    font-weight: 600;
    box-shadow:
      inset 0 -0.225rem 0 0 $papier,
      inset 0 -0.475rem 0 0 $accent-purple-3;

    &:hover {
      text-shadow: 1px 0px 0px $accent-purple-1;
    }
  }

  p {
    margin-top: 20px;
  }

  blockquote {
    padding-left: 40px;
    padding-right: 40px;
  }

  ol {
    margin: 32px 0;
    padding: 0 60px;
    list-style-type: decimal;
  }
  ul {
    margin: 32px 0;
    padding: 0 60px;
    list-style-type: circle;
  }
  li {
    padding-left: 10px;
  }
}
</style>
