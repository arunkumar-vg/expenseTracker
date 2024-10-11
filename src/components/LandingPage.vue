<script setup>
import { ref } from 'vue';

import DataContainer from './DataContainer.vue';
import SideBar from './SideBar.vue';

const currentYear = ref(new Date().getFullYear());

const Year = ref(new Date().getFullYear());
const Month = ref(new Date().getMonth());

let activeYear = ref(Year.value);
let activeMonth = ref(Month.value);

const updateYear = (newYear) => {
  currentYear.value = newYear;
};

const onYearClick = (id) => {
  activeYear.value = id;
};

const onMonthClick = (value) => {
  activeMonth.value = value;
};

const reset = () => {
  activeYear.value = Year.value;
  activeMonth.value = Month.value;
};

</script>

<template>
  <div class="container-main">
    <div class="sidebar">
      <SideBar :currentYear="currentYear" :activeYear="activeYear" :activeMonth="activeMonth" :onYearClick="onYearClick"
        :onMonthClick="onMonthClick" :reset="reset" :updateYear="updateYear" />
    </div>
    <div class="data-container">
      <DataContainer :activeYear="activeYear" :activeMonth="activeMonth" />
    </div>
  </div>
</template>

<style lang="scss">
.container-main {
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
  overflow-y: auto;
}
</style>
