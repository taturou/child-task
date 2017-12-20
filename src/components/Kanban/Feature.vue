<template>
  <div>
    <div>
      {{story.name}}
      <span
        @click="createOpenedTaskToStory({story: story})"
        class="clickable">
        <icon name="plus-circle"></icon>
      </span>
    </div>
    <div class="projectName">
      {{story.projectName}}
    </div>    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
  
export default {
  props: {
    story: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations('kanban', [
      "createOpenedTaskToStory"
    ])
  }
}
</script>

<style scoped>
@import "../../../src/style/Kanban/index.css";
</style>