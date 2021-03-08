<template>
  <div class="container mx-auto bg-transparent">
    <div>
      <Header />
      <TabBar />
      <div class="content-wrapper shadow-lg rounded">
        <Nuxt />
      </div>
      <div class="colorpop rounded-b"></div>
        <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TabBar from '@/components/TabBar';

export default {
  components: {
    Header,
    Footer,
    TabBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

html {
  font-family: 'PT Serif', Georgia, Times, "Times New Roman", serif;
  background-color: #ede5d9;
  color: #404040;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container {
  text-align: center;
}

.content-wrapper {
  padding: 40px 30px;
  background-color: rgba(247, 243, 239, 1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.colorpop {
    position: relative;
    height: 20px;
    width: 100%;
    bottom: 20px;
    background-color: rgba(75, 60, 90, 0.8);
}
</style>
