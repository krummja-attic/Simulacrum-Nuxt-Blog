<template>
  <g :data-dummy="update()"></g>
</template>

<script>
import * as d3 from 'd3';

export default {
  props: {
    draw: Function
  },
  data () {
    return { update: () => null };
  },
  mounted () {
    this.update = this.draw(d3.select(this.$el));
  }
}
</script>
