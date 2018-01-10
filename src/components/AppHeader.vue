<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/step/1" class="none-decoration">あさ</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/step/2" class="none-decoration">よる</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/kanban" class="none-decoration">Kanban</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/orm" class="none-decoration">ORM</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      activeIndex: "1"
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.none-decoration {
    text-decoration: none;
}
</style>
