<template>
  <div>
    <el-container>
      <el-header>
        <h1>
          {{story.name}}
        </h1>
      </el-header>
      <el-main>
        <div class="kanban">
          <div class="header">
            <div class="head-story">
              <div class="head-status">
                <div class="title">やるよ</div>
              </div>
              <div class="head-status">
                <div class="title">おわったよ</div>
              </div>
              <div class="head-status">
                <div class="title">やらないよ</div>
              </div>
            </div>
          </div>
          <div class="body">
            <!-- Opened -->
            <div class="status">
              <draggable
                v-model="story.openedTasks"
                class="taskList"
                :options="{group: '1'}">
                <opened-task
                  v-for="task in story.openedTasks"
                  :key="task.id"
                  :story="story"
                  :task="task">
                </opened-task>
              </draggable>
            </div>
            <!-- Closed -->
            <div class="status">
              <draggable
                v-model="story.closedTasks"
                class="taskList"
                :options="{group: '1'}">
                <closed-task
                  v-for="task in story.closedTasks"
                  :key="task.id"
                  :story="story"
                  :task="task">
                </closed-task>
              </draggable>
            </div>
            <!-- Won't -->
            <div class="status">
              <draggable
                v-model="story.wontTasks"
                class="taskList"
                :options="{group: '1'}">
                <wont-task
                  v-for="task in story.wontTasks"
                  :key="task.id"
                  :story="story"
                  :task="task">
                </wont-task>
              </draggable>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import TaskOpened from './KanbanTaskOpened.vue'
import TaskClosed from './KanbanTaskClosed.vue'
import TaskWont from './KanbanTaskWont.vue'

export default {
  name: 'StepsKanban',
  components: {
    draggable,
    'opened-task': TaskOpened,
    'closed-task': TaskClosed,
    'wont-task': TaskWont
  },
  computed: {
    ...mapGetters("kanban", {
      story: "currentStory"
    })
  }
}
</script>

<style scoped>
@import "../../../src/style/Steps/index.css";
  
h1 {
  width: 100%;
  background-color: #67c23a;
  color: white;  
  text-align: center;
  margin: 0px 0px 1em 0px;
  padding: 10px 0px;
}
</style>