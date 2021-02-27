<template>
  <div class="container flex flex-col min-h-full mx-auto bg-transparent">
    <div class="flex-initial w-full">

      <Header />

      <div class="content-wrapper w-auto h-auto shadow-lg rounded">

        <Nuxt />

      </div>
    </div>
  </div>
</template>


<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');

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
  padding: 40px 0;
  background-color: #F7F3EF;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
