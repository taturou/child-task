<template>
  <section>
    <table>
      <tr>
        <th>いま</th>
        <th>もくひょう</th>
      </tr>
      <tr>
        <td>
          <analog-clock
            :size="clockSize"
            :now="true">
          </analog-clock>
        </td>
        <td>
          <analog-clock
            :size="clockSize"
            :time="dueTime"
            :color-dial="dueColorDial">
          </analog-clock>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AnalogClock from '@/components/AnalogClock'

export default {
  name: 'StepsClock',
  props: {
    group_id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      dueColorDial: "white",
      intervalId: 0
    }
  },
  components: {
    'analog-clock': AnalogClock
  },
  computed: {
    ...mapGetters("kanban", [
      "currentStory"
    ]),
    story: function() {
      return this.currentStory(this.group_id);
    },
    dueTime: function() {
      return {
        hours: this.story.due.hours,
        minutes: this.story.due.minutes,
        seconds: 0
      }
    },
    clockSize: function() {
      return "35vh"
    },
    dueDate: function() {
      let now = new Date;
      return new Date(now.getFullYear(),
               now.getMonth(),
               now.getDate(),
               this.story.due.hours,
               this.story.due.minutes,
               0);
    }
  },
  methods: {
    setNowTime: function() {
      let now = new Date();
      if (this.dueDate < now) {
        this.dueColorDial = "pink";
      } else {
        this.dueColorDial = "white";
      }
    }
  },
  mounted: function() {
    this.intervalId = setInterval(() => { this.setNowTime() }, 1000)
  },
  beforeDestroy: function() {
    clearInterval(this.intervalId)
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
section {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}

td, th {
  padding: 10px 10px;
}
  
th {
  text-align: center;
  font-size: 2em;
  text-shadow: 2px 2px 0 white,
               -2px 2px 0 white,
               2px -2px 0 white,
               -2px -2px 0 white;
}
</style>
