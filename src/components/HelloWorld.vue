<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">Increment: {{ counter }}</button>
    <div>
      <CountValue :counter="counter" :state="state"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import CountValue from './CountValue.vue';

const message = ref('Vue 3!');
const counter = ref(0);

const state = reactive([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
]);

const increment = () => {
  counter.value++;
};
</script>

<style scoped>
h1 {
  color: rgb(120, 120, 129);
}
</style>
