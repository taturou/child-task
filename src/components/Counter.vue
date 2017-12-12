<template>
  <div>
    <h2>
      {{count}}
    </h2>
    <div>
      <button @click="increment">
        +
      </button>
      <button @click="decrement">
        -
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
  
export default {
  name: 'Counter',
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
