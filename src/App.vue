<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">主页</router-link>
      <router-link to="list-page">文章列表</router-link>
      <router-link to="about-me">关于我</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
