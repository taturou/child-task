import { Model } from 'vuex-orm'
import Subtask from './Subtask'

export default class Task extends Model {
  static entity = 'tasks'

  static fields () {
    return {
      id: this.attr(null),
      story_id: this.attr(null),
      name: this.attr(''),
      estimate: this.attr(''),
      subtasks: this.hasMany(Subtask, 'task_id')
    }
  }
}