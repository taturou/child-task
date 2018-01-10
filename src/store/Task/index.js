import Vue from 'vue'
import Vuex from 'vuex'
import { Database } from 'vuex-orm'
import Day from './Day'
import Story from './Story'
import Task from './Task'
import Subtask from './Subtask'

const days = {}
const stories = {}
const tasks = {}
const subtasks = {}

Vue.use(Vuex)

const database = new Database()

database.register(Day, days)
database.register(Story, stories)
database.register(Task, tasks)
database.register(Subtask, subtasks)

export default database

export function createDays(store, days) {
  let day_id = store.getters['task/days/all']().length + 1
  let story_id = store.getters['task/stories/all']().length + 1
  let task_id = store.getters['task/tasks/all']().length + 1
  let subtask_id = store.getters['task/subtasks/all']().length + 1

  for (let day of days) {
    day.id = day_id

    for (let story of day.stories) {
      story.id = story_id
      story.day_id = day_id

      for (let task of story.tasks) {
        task.id = task_id
        task.story_id = story_id

        for (let subtask of task.subtasks) {
          subtask.id = subtask_id
          subtask.task_id = task_id
          subtask.state = 'opened'

          subtask_id = subtask_id + 1
        }
        task_id = task_id + 1
      }
      story_id = story_id + 1
    }

    store.dispatch('task/days/create', {data: day})
    day_id = day_id + 1
  }
}