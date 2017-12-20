<template>
  <div class="kanban">
    <div class="header">
      <div class="head-story">
        <div class="head-feature">
          Stories
        </div>
        <div class="head-status">
          やること 
          <span class="maru">{{numOpened}}</span>
        </div>
        <div class="head-status">
          やってる！
          <span class="maru">{{numWorking}}</span>
        </div>
        <div class="head-status">
          おわった！
          <span class="maru">{{numClosed}}</span>
        </div>
        <div class="head-status">
          やらない
          <span class="maru">{{numWont}}</span>
        </div>
      </div>
    </div>
    <div class="body">
      <div
        v-for="story in Stories"
        class="story">
        <!-- feature -->
        <div class="feature">
          <feature
            :story="story">
          </feature>
        </div>
        <!-- Opened -->
        <div class="status">
          <draggable
            v-model="story.openedTasks"
            class="taskList"
            :options="{group: story.groupId}">
            <opened-task
              v-for="task in story.openedTasks"
              :key="task.id"
              :story="story"
              :task="task">
            </opened-task>
          </draggable>
        </div>
        <!-- Working -->
        <div class="status">
          <draggable
            v-model="story.workingTasks"
            class="taskList"
            :options="{group: story.groupId}">
            <working-task
              v-for="task in story.workingTasks"
              :key="task.id"
              :story="story"
              :task="task">
            </working-task>
          </draggable>
        </div>
        <!-- Closed -->
        <div class="status">
          <draggable
            v-model="story.closedTasks"
            class="taskList"
            :options="{group: story.groupId}">
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
            :options="{group: story.groupId}">
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
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Feature from './Feature.vue'
import TaskOpened from './TaskOpened.vue'
import TaskWorking from './TaskWorking.vue'
import TaskClosed from './TaskClosed.vue'
import TaskWont from './TaskWont.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Kanban',
  components: {
    draggable,
    'feature': Feature,
    'opened-task': TaskOpened,
    'working-task': TaskWorking,
    'closed-task': TaskClosed,
    'wont-task': TaskWont
  },
  computed: {
    ...mapGetters('kanban', [
      'numTasks',
      'Stories',
      'numOpened',
      'numWorking',
      'numClosed',
      'numWont'
    ])
  }
}
</script>

<style scoped>
@import "../../../src/style/Kanban/index.css";
</style>