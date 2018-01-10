import { Model } from 'vuex-orm'
import Story from './Story'

export default class Day extends Model {
  static entity = 'days'

  static fields () {
    return {
      id: this.attr(null),
      date: this.attr(''),
      stories: this.hasMany(Story, 'day_id')
    }
  }
}