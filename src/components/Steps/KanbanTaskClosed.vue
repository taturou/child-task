<template>
  <div
    class="task closed draggable">
    <div class="title">
      {{task.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true
    },
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
@import "../../../src/style/Steps/index.css";
</style>