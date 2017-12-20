<template>
  <div>
    <el-row>
      <el-col :span="4">
        <steps-story></steps-story>
      </el-col>
      <el-col :span="20">
        <steps-kanban></steps-kanban>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Story from './Story.vue'
import Kanban from './Kanban.vue'

export default {
  name: 'Steps',
  components: {
    "steps-story": Story,
    "steps-kanban": Kanban
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
