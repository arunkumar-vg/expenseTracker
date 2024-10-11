<script setup>
import { ref } from 'vue';
import CalculationContainer from './CalculationContainer.vue';
import SideBar from './SideBar.vue';

const currentYear = ref(new Date().getFullYear());
const updateYear = (newYear) => {
  currentYear.value = newYear;
};
</script>

<template>
  <div class="container">
    <div class="sidebar">
      <SideBar :currentYear="currentYear" :updateYear="updateYear" />
    </div>
    <div class="data-container">
      <CalculationContainer />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
}

.sidebar {
  width: 20%;
}

.data-container {
  width: 80%;
}

.sidebar,
.data-container {
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
  height: calc(100vh - 100px);
}
</style>
