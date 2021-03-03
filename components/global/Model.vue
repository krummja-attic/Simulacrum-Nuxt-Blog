<template>
    <div class="flex flex-wrap">
        <canvas id="root-canvas"></canvas>
        <span id="source" ref="source-slot">
            <slot name="source"></slot>
        </span>
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
            console.log(this.$refs)
            // const source = document.getElementById('source-slot').innerText;

            // nomnoml.draw(canvas, source);

            document.getElementById('source').style.visibility = "hidden";
        }
    }
}
</script>
