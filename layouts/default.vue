<template>
  <div class="container mx-auto bg-transparent">
    <Header />
    <TabBar />
    <div class="content-wrapper shadow-lg rounded">
      <Nuxt />
    </div>
    <div class="colorpop rounded-b"></div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TabBar from '@/components/TabBar';

export default {
  name: 'default',
  components: {
    Header,
    Footer,
    TabBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

html {
  font-family: 'PT Serif', Georgia, Times, "Times New Roman", serif;
  background-color: $creme;
  color: $nero;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  height: 100%;
  text-align: center;
}

.content-wrapper {
  height: 100%;
  padding: 40px 30px;
  background-color: $papier;
}

.colorpop {
  position: relative;
  height: 20px;
  width: 100%;
  bottom: 20px;
  background-color: $accent-purple-2;
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
  }

  h1 {
    color: $accent-purple-2;
    font-weight: bold;
    font-size: 28px;
  }

  h2 {
    color: $accent-purple-2;
    padding-top: 30px;
    font-weight: bold;
    font-size: 28px;
  }

  h3 {
    color: $accent-purple-2;
    padding-top: 30px;
    font-weight: bold;
    font-size: 22px;
  }

  h4 {
    color: $accent-purple-2;
    margin-top: 30px;
    font-style: italic;
    font-size: 20px;
  }

  p {
    margin: 16px 0;
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

  pre {
    margin: 40px 0;
    border-radius: 8px;
    box-shadow: inset 0 0 10px $shade;
    background: $creme;

    code {
      border-radius: 0;
      padding: 0;
      box-shadow: none;
      background: none;

      span.token.operator {
        background: none;
      }
    }
  }

  .dropcap {
    color: $accent-purple-1;
    float: left;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
  }

  .footnotes {
    margin-top: 150px;

    li {
      margin-top: 8px;
    }

    &::before {
      content: "References";
      color: $accent-purple-2;
      font-weight: bold;
      font-size: 28px;
    }
  }

  .footnote-ref {
    color: $accent-purple-1;
  }

  .footnote-backref {
    margin-left: 6px;
    color: $accent-purple-1;
  }
}

@screen xs {
  .nuxt-content pre code {
    @apply text-xs;
  }

  .nuxt-content code {
    @apply text-xs leading-3;
  }
}

// @screen sm {
//   .nuxt-content pre code {
//     @apply text-sm;
//   }

//   .nuxt-content code {
//     @apply text-sm;
//   }
// }

@screen md {
  .nuxt-content pre code {
    @apply text-sm;
  }

  .nuxt-content code {
    @apply text-sm leading-6;
  }
}

// @screen lg {
//   .nuxt-content pre code {
//     @apply text-base;
//   }

//   .nuxt-content code {
//     @apply text-base;
//   }
// }

code {
  padding: 0 5px;
  background: $creme;
  border-radius: 8px;
  box-shadow: inset 0 0 10px $shade;
  font-size: 11pt;
}
</style>
