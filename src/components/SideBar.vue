<script setup>
import SheetPicker from './SheetPicker.vue';
import { defineProps } from 'vue';

const props = defineProps({
  currentYear: {
    required: true,
    type: Number
  },
  updateYear: {
    required: true,
    type: Function
  }
});
</script>

<template>
  <div>
    <SheetPicker :currentYear="props.currentYear" :updateYear="props.updateYear" />
  </div>
</template>