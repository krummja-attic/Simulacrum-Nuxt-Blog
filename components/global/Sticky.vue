<template>
  <div :style="addJitter" :id="this.uuid" class="container shadow-md">
    <slot></slot>
  </div>
</template>

<script>
let uuid = 0;
export default {
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
  data() {
    const angles = [-10, -5, 0, 5, 10]
    return {
      angles
    }
  },
  computed: {
    addJitter: function () {
      let jitter = this.angles[Math.floor(Math.random() * this.angles.length)];

      return "transform: rotate(" + jitter.toString() + "deg);";
    }
  }
}
</script>

<style scss scoped>
.container {
  font-family: 'Caveat', sans-serif;
  font-size: 1.5rem;
  z-index: 1;
  float: right;
  position: absolute;
  left: 100%;
  width: 200px;
  min-height: 200px;
  height: auto;
  padding: 10px;
  margin-left: 10px;
  color: #333333;
  background-color: #ffeca9;
}
</style>
