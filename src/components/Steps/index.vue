<template>
  <div>
    <el-row>
      <el-col :span="4">
        <steps-story
          :group_id="group_id">
        </steps-story>
      </el-col>
      <el-col :span="20">
        <steps-kanban
          :group_id="group_id">
        </steps-kanban>
      </el-col>
    </el-row>

    <steps-clock
      :group_id="group_id">
    </steps-clock>
  </div>
</template>

<script>
import Story from './Story.vue'
import Kanban from './Kanban.vue'
import Clock from './Clock.vue'

export default {
  name: 'Steps',
  data() {
    return {
      group_id: 1
    }
  },
  components: {
    "steps-story": Story,
    "steps-kanban": Kanban,
    "steps-clock": Clock
  },
  beforeRouteUpdate (to, from, next) {
    console.log("beforeRouteUpdate");
    this.group_id = parseInt(to.params.group_id);
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
