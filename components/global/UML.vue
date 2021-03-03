<template>
    <div class="uml-figure">
        <canvas class="target"></canvas>
    </div>
</template>

<script>
import nomnoml from 'nomnoml';

export default {
    mounted () {
        let canvas = document.getElementById('target');
        let src = '[nomnoml] is -> [awesome]';
        nomnoml.draw(canvas, src);
    }
}
</script>
