<template>
  <div
    class="task wont draggable">
    <div class="id">
      {{task.id}}      
    </div>
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
@import "../../../src/style/Kanban/index.css";
</style>