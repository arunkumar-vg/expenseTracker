<script setup>
import NoData from '../assets/no-data.png'
</script>

<template>
  <div class="item-center mt-no-data">
    <div class="no-data">
      <img :src="NoData" alt="No data available" />
    </div>
  </div>
  <span class="item-center text-xlarge font-gray">No Records</span>
</template>

<style scoped>
.mt-no-data {
  margin-top: 5rem;
}

.no-data {
  display: block;
}

.no-data img {
  width: 250px;
  height: 250px;
}
</style>
