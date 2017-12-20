<template>
  <el-container>
    <el-header>
      <app-header/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'app',
  components: { AppHeader }
}
</script>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Original Yu Gothic", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;
}
</style>
