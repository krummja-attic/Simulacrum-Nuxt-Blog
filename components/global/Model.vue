<template>
  <div class="flex flex-wrap">
    <canvas id="root-canvas"></canvas>
    <div id="source" ref="source-slot">
      <slot name="source"></slot>
    </div>
  </div>
</template>

<script>
import nomnoml from 'nomnoml';

export default {
  mounted () {
    this.drawModel();
  },
  methods: {
    drawModel()
    {
      const canvas = document.getElementById('root-canvas');
      const source = document.getElementById('source').innerText;
      nomnoml.draw(canvas, source);
    }
  }
}
</script>
