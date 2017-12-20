<template>
  <div>
    <el-steps
      direction="vertical"
      process-status="process"
      finish-status="success"
      space="50px"
      :active="currentStoryIndex">
      <el-step
        v-for="(story, index) in Stories"
        key="story.id">
        <div slot="title" @click="setCurrentStoryIndex({index: index})">
          {{story.name}}
        </div>
      </el-step>
    </el-steps>
    <el-button
      style="margin-top: 12px;"
      @click="toNextStory">
      つぎへ
    </el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'StepsStory',
  computed: {
    ...mapGetters("kanban", [
      "Stories",
      "currentStoryIndex"
    ])
  },
  methods: {
    ...mapMutations("kanban", [
      "setCurrentStoryIndex"
    ]),
    ...mapActions("kanban", [
      "toNextStory"
    ])
  }
}
</script>

<style scoped>
</style>