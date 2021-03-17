<template>
  <div class="experimental">
    <!-- <h1>A world of pure imagination.</h1> -->
    <div class="item-box w-2/5 h-128">

    </div>
  </div>
</template>

<script>
export default {
  layout (context) {
    return 'experimental';
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 80pt;
}

.item-box {
  position: absolute;
  right: 128px;
  border: 2px solid #2a2a2a;
}
</style>
