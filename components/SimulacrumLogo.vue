<template>
    <div id="logo" />
</template>

<script>
import * as d3 from 'd3';

export default {
    data() {
        return {
            width: 350,
            height: 200,
        }
    },
    mounted() {
        let root = d3.select("div#logo");

        root.append("svg")
            .attr('width', 270)
            .attr('height', 140);
            // .attr('transform', `translate(${100}, ${100})`);

        let svg = d3.select("div#logo svg");

        let scale = 10;

    },
    methods: {}
}
</script>
