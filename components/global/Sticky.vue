<template>
  <div :style="addJitter" :id="this.uuid" class="wrapper shadow-md invisible xl:visible xl:w-0">
    <div class="sticky">
      <slot></slot>
    </div>
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

<style lang="scss" scoped>
.wrapper {
  @media screen and (min-width: 1280px) {
    min-width: 250px;
  }

  @media screen and (min-width: 1024px) {
    width: 0;
  }

  @media screen and (min-width: 768px) {
    width: 0;
  }

  @media screen and (min-width: 640px) {
    width: 0;
  }

  @media screen and (min-width: 320px) {
    width: 0;
  }

  max-height: 250px;
  font-family: 'Pangolin', cursive;
  font-weight: 400;
  // font-size: 1.6rem;
  z-index: 1;
  float: right;
  position: absolute;
  left: 100%;
  padding: 10px;
  margin-left: 10px;
  color: #333;
  background-color: #ffeca9;
}

.sticky {
  width: auto;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}
</style>
