<template>
    <div>
        <p><slot v-bind="formula" name="figure">{{ formula }}</slot></p>
    </div>
</template>


<script>
import { VueMathJax } from 'vue-mathjax';

export default {
    components: {
        'vue-mathjax': VueMathJax
    },
    props: {
        formula: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            formula: this.formula
        }
    }
}
</script>
