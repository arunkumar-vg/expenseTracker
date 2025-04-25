<template>
  <div class="back-drop">
    <div class="modal">
      <div class="d-flex text-semibold">
        {{ props.heading }}
        <span class="d-flex align-items-center cursor-pointer ml-auto" @click="props.closeModal">
          <XCircleIcon style="width: 18px; height: 18px; color: #cccccc;" />
        </span>
      </div>
      <p class="mb-3">
        message
      </p>
      <div>
        <div class="d-flex justify-content-end">
          <span class="btn-common" @click="props.closeModal">
            Cancel
          </span>
          <span class="btn-common" @click="props.onSave">
            {{ props.buttonName }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { XCircleIcon } from '@heroicons/vue/solid';

const props = defineProps({
  heading: String,
  buttonName: String,
  closeModal: { type: Function, required: true },
  onSave: { type: Function, required: true }
});
</script>

<style scoped>
.back-drop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal {
  background-color: white;
  width: 40vw;
  height: 25vh;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-in-out;
}
</style>
