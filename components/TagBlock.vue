<template>
  <div class="tag-block flex flex-row flex-wrap">
    <Tag tagName="Writing" />
    <Tag tagName="Linguistics" />
  </div>
</template>

<script>
import Tag from '@/components/Tag'
export default {
  components: {
    Tag
  }
}
</script>

<style lang="scss" scoped>
.tag-block {
  @apply col-start-2 col-end-8;

  height: 160px;
}
</style>
