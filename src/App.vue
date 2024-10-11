<template>
  <span>
    <img alt="Vue logo" src="../public/assets/logo.png">
  </span>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './styles.scss';
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #2c3e50;
  font-size: 14px;
}

span {
  width: calc(100vw - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 2px 4px 8px rgb(0 0 0 / 10%);
}
img {
  width: 40px;
  height: 40px;
}
</style>
