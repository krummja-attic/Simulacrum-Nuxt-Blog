<template>
  <div class="container mx-auto bg-transparent">
    <div
    class="content grid
    md:grid-cols-4 md:gap-4
    xl:grid-cols-6 xl:gap-6"
    >
      <div class="md:col-span-4 xl:col-span-6 h-16"></div>
      <div class="col-span-2 h-128">
        <h1>The Digital Garden</h1>
        <p class="flavor-text">A cultivated selection of notes, research, sketches, and other nonsense.</p>
        <GardenPlot />
      </div>
      <div class="col-span-4 h-128"></div>
    </div>
  </div>
</template>

<script>
import GardenPlot from '@/components/GardenPlot';

export default {
  name: 'redesign',
  components: {
    GardenPlot
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;500&display=swap');

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

h1 {
  font-family: 'Raleway', sans-serif;
  text-align: left;
  font-weight: bold;
  font-size: 26pt;
  margin-left: 10px;
  margin-bottom: 40px;
}

.container {
  height: 100%;
  text-align: center;
}

.test {
  border: 1px solid $nero;
}

.flavor-text {
  text-align: left;
  margin-left: 10px;
  font-size: 14pt;
  margin-bottom: 20px;
}
</style>
