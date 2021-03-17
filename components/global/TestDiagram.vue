<template>
  <Diagram :draw="draw"/>
</template>

<script>
import Diagram from '@/components/global/Diagram'

export default {
  components: {
    Diagram
  },
  data () {
    let fill = 'hsl(0,50%,50%)';
    let outerWidth = 600;
    let outerHeight = 300;
    let margin = {left: 30, top: 10, right: 10, bottom: 20};

    return {
      fill, outerWidth, outerHeight, margin
    }
  },
  methods: {
    draw(parent) {
      const root = parent.append('g');
      return () => {
        root.append('rect')
          .attr('width', 200)
          .attr('height', 200)
          .attr('fill', 'hsl(0,50%,50%)')
      }
    }
  }
}
</script>
