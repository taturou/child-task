<template>
  <section
    class="clock"
    ref="clock"
    :style="clockStyles">

    <div
      v-for="(n, index) in Array(60)"
      class="minuteMark"
      ref="minuteMark"
      :style="minuteMarkStyles(index)">
      <i
        :style="minuteMarkIStyles(index)">
      </i>
    </div>

    <ul
      :style="numberStyles">
      <li
        v-for="(number, index) in numbers"
        :key="index">
        <i>
          {{number}}
        </i>
      </li>
    </ul>

    <div
      class="title"
      :style="titleStyles">
      {{title}}
    </div>

    <div
      class="hourHand"
      :style="hourHandStyles">
    </div>

    <div
      class="minuteHand"
      :style="minuteHandStyles"></div>

    <div
      class="secondHand"
      :style="secondHandStyles">
    </div>
    
    <div
      class="cercle"
      :style="cercleStyles">
    </div>
  </section>
</template>

<script>
export default {
  name: 'AnalogClock',
  props: {
    title: {
      type: String,
      default: ""
    },
    now: {
      type: Boolean,
      default: false
    },
    time: {
      type: Object,
      default: function() {
        return {
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }
    },
    numbers: {
      type: Array,
      default: function() {
        return ["12","1","2","3","4","5","6","7","8","9","10","11"]
      }
    },
    colors: {
      type: Object,
      default: function() {
        return {
          title: "gray",
          hand: {
            hours: "red",
            minutes: "blue",
            seconds: "green",
            cercle: "green"
          },
          number: "red",
          minuteMark: "blue",
          bezel: "black"
        }
      }
    }
  },
  data() {
    return {
      fontSize: 1,
      handWidth: {
        hours: 3,
        minutes: 2,
        seconds: 1
      },
      bezelWidth: 1,
      intervalId: undefined
    }
  },
  computed: {
    clockStyles: function() {
      return {
        "background-color": "white",
        border: this.bezelWidth + "px solid " + this.colors.bezel
      }
    },
    numberStyles: function() {
      return {
        fontSize: this.fontSize + "px",
        "font-weight": "bold",
        color: this.colors.number
      }
    },
    titleStyles: function() {
      return {
        fontSize: (this.fontSize) + "px",
        color: this.colors.title
      }
    },
    hourHandStyles: function() {
      return { 
        width: this.handWidth.hours + "px",
        left: "calc(50% - " + (this.handWidth.hours / 2) + "px)",
        transform: "rotate(" + (30 * this.time.hours + 0.5 * this.time.minutes) + "deg)",
        "background-color": this.colors.hand.hours
      }
    },
    minuteHandStyles: function() {
      return { 
        width: this.handWidth.minutes + "px",
        left: "calc(50% - " + (this.handWidth.minutes / 2) + "px)",
        transform: "rotate(" + (6 * this.time.minutes + 0.1 * this.time.seconds) + "deg)",
        "background-color": this.colors.hand.minutes
      }
    },
    secondHandStyles: function() {
      return { 
        width: this.handWidth.seconds + "px",
        left: "calc(50% - " + (this.handWidth.seconds / 2) + "px)",
        transform: "rotate(" + (6 * this.time.seconds) + "deg)",
        "background-color": this.colors.hand.seconds
      }
    },
    cercleStyles: function() {
      return {
        width: (this.handWidth.hours * 1.5) + "px",
        height: (this.handWidth.hours * 1.5) + "px",
        "background-color": this.colors.hand.cercle
      }
    }
  },
  methods: {
    minuteMarkStyles: function(index) {
      return {
        transform: "translate(-50%, 0) rotate(" + (index * 6) + "deg)"
      }
    },
    minuteMarkIStyles: function(index) {
      let width = (index % 5) == 0 ? 2 : 1;
      let height = (index % 5) == 0 ? 10 : 5;
      return {
        width: width + "px",
        height: height + "%",
        "background-color": this.colors.minuteMark
      }
    },
    setNowTime: function() {
      let now = new Date();
      this.time.hours = now.getHours()
      this.time.minutes = now.getMinutes()
      this.time.seconds = now.getSeconds()
    }
  },
  mounted: function() {
    let size = this.$refs.clock.clientHeight / 10;
    this.fontSize = size;
    this.handWidth.hours = size / 2;
    this.handWidth.minutes = size / 4;
    this.handWidth.seconds = size / 10;
    this.bezelWidth = size / 10;
    
    if (this.now == true) {
      this.intervalId = setInterval(() => { this.setNowTime() }, 1000)
    }
  },
  beforeDestroy: function() {
    clearInterval(this.intervalId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.clock {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100%;
}

section.clock > ul {
  position: absolute;
  top: 7%;
  right: 0;
  bottom: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
  
section.clock > ul > li {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 50% 100%;
}      
section.clock > ul > li:nth-child(2) {
  transform: rotate(30deg);
}
section.clock > ul > li:nth-child(3) {
  transform: rotate(60deg);
}
section.clock > ul > li:nth-child(4) {
  transform: rotate(90deg);
}
section.clock > ul > li:nth-child(5) {
  transform: rotate(120deg);
}
section.clock > ul > li:nth-child(6) {
  transform: rotate(150deg);
}
section.clock > ul > li:nth-child(7) {
  transform: rotate(180deg);
}
section.clock > ul > li:nth-child(8) {
  transform: rotate(210deg);
}
section.clock > ul > li:nth-child(9) {
  transform: rotate(240deg);
}
section.clock > ul > li:nth-child(10) {
  transform: rotate(270deg);
}
section.clock > ul > li:nth-child(11) {
  transform: rotate(300deg);
}
section.clock > ul > li:nth-child(12)  {
  transform: rotate(330deg);
}

section.clock > ul > li > i {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  font-style: normal;
}
section.clock > ul > li:nth-child(2) > i {
  transform: translateX(-50%) rotate(-30deg)
}
section.clock > ul > li:nth-child(3) > i {
  transform: translateX(-50%) rotate(-60deg)
}
section.clock > ul > li:nth-child(4) > i {
  transform: translateX(-50%) rotate(-90deg)
}
section.clock > ul > li:nth-child(5) > i {
  transform: translateX(-50%) rotate(-120deg)
}
section.clock > ul > li:nth-child(6) > i {
  transform: translateX(-50%) rotate(-150deg)
}
section.clock > ul > li:nth-child(7) > i {
  transform: translateX(-50%) rotate(-180deg)
}
section.clock > ul > li:nth-child(8) > i {
  transform: translateX(-50%) rotate(-210deg)
}
section.clock > ul > li:nth-child(9) > i {
  transform: translateX(-50%) rotate(-240deg)
}
section.clock > ul > li:nth-child(10) > i {
  transform: translateX(-50%) rotate(-270deg)
}
section.clock > ul > li:nth-child(11) > i {
  transform: translateX(-50%) rotate(-300deg)
}
section.clock > ul > li:nth-child(12) > i {
  transform: translateX(-50%) rotate(-330deg)
}

section.clock > div.title {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  
}
  
section.clock > div.secondHand, div.minuteHand, div.hourHand {
  width: 1px; /* overwrite */
  height: 1px; /* overwrite */
  position: absolute;
  bottom: 50%;
  left: 0; /* overwrite */
  transform-origin: bottom;
  border-radius: 3px;
}

section.clock > div.secondHand {
  height: 45%;
}
  
section.clock > div.minuteHand {
  height: 45%;
}

section.clock > div.hourHand {
  height: 30%;
}

section.clock > div.cercle {
  position: absolute;
  bottom: 50%;
  left: 50%;
  border-radius: 100%;
  transform: translate(-50%, 50%);
}
  
section.clock > div.minuteMark {
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 50%;
  width: 1px;
  transform-origin: bottom;
  transform: translate(-50%, 0);
}

section.clock > div.minuteMark > i {
  position: absolute;
  top: 5%;
  left: 0;
  width: 1px;
  height: 5%;
  transform: translateX(-50%);
}
</style>
