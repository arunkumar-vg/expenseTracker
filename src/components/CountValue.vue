<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  counter: {
    type: Number,
    required: true
  },
  state: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div>
    <p>Counter value from parent</p>
    <p v-if="props.counter">{{ props.counter }}</p>
    <p v-else>Zero</p>
    <ul>
      <li v-for="item in state" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    display: block;
    justify-content: center;
    align-items: center;
  }
  li {
    width: 10rem;
  }
</style>
