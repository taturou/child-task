<template>
  <div
    class="task opened draggable">
    <div class="id">
      {{task.id}}      
    </div>
    <div class="title">
        {{task.title}}
    </div>
    <a 
      @click.stop.prevent="removeOpenedTask({story: story, task: task})"
      class="non-draggable"
      style="float: right">
      <icon name="trash"></icon>
    </a>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
  
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
  },
  methods: {
    ...mapMutations('kanban', [
      "removeOpenedTask"
    ])
  }
}
</script>

<style scoped>
@import "../../../src/style/Kanban/index.css";
</style>