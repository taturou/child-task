import { Model } from 'vuex-orm'

export default class Subtask extends Model {
  static entity = 'subtasks'

  static fields () {
    return {
      id: this.attr(null),
      task_id: this.attr(null),
      name: this.attr(''),
      state: this.attr('')
    }
  }
}