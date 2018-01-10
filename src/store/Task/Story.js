import { Model } from 'vuex-orm'
import Task from './Task'

export default class Story extends Model {
  static entity = 'stories'

  static fields () {
    return {
      id: this.attr(null),
      day_id: this.attr(null),
      name: this.attr(''),
      tasks: this.hasMany(Task, 'story_id')
    }
  }
}