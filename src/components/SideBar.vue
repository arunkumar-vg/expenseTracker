<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/valid-define-emits -->
<script setup>
import { defineProps, reactive, ref, computed, defineEmits } from 'vue';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/outline';

const emit = defineEmits();

const Year = ref(new Date().getFullYear());

const props = defineProps({
  currentYear: {
    required: true,
    type: Number
  },
  activeYear: {
    required: true,
    type: Number
  },
  activeMonth: {
    required: true,
    type: Number
  },
  onYearClick: {
    required: true,
    type: Function
  },
  onMonthClick: {
    required: true,
    type: Function
  },
  reset: {
    required: true,
    type: Function
  },
  updateYear: {
    required: true,
    type: Function
  }
});
const arrayOfYears = computed(() => {
  return Array.from({ length: 9 }, (_, i) => ({
    year: props.currentYear - 8 + i,
    id: 8 - i,
  }));
});

const arrayOfMonths = reactive([
  { month: 'jan', value: 0 },
  { month: 'feb', value: 1 },
  { month: 'mar', value: 2 },
  { month: 'apr', value: 3 },
  { month: 'may', value: 4 },
  { month: 'jun', value: 5 },
  { month: 'jul', value: 6 },
  { month: 'aug', value: 7 },
  { month: 'sep', value: 8 },
  { month: 'oct', value: 9 },
  { month: 'nov', value: 10 },
  { month: 'dec', value: 11 }
]);

const yearChange = (direction) => {
  const newYear = direction === 'left' ? props.currentYear - 10 : props.currentYear + 10;
  props.updateYear(newYear);
};
</script>

<template>
  <div class="arrow-bns">
    <span @click="yearChange('left')">
      <ArrowLeftIcon style="width: 16px; height: 16px;" />
    </span>
    <span class="font-bold">Select Year</span>
    <span :class="{ 'disabled': props.currentYear === Year }"
      @click="props.currentYear !== Year ? yearChange('right') : null">
      <ArrowRightIcon style="width: 16px; height: 16px;" />
    </span>
  </div>

  <div class="grid grid-cols-3">
    <div class="year-row" v-for="item in arrayOfYears" :key="item.id">
      <span class="year" :class="{ active: activeYear === item.year }" @click="props.onYearClick(item.year)">
        {{ item.year }}
      </span>
    </div>
  </div>

  <div class="month font-bold">Select Month</div>
  <div class="grid grid-cols-3">
    <div class="year-row" v-for="item in arrayOfMonths" :key="item.value">
      <span class="year" :class="{ active: activeMonth === item.value }" @click="props.onMonthClick(item.value)">
        {{ item.month.toUpperCase() }}
      </span>
    </div>
  </div>

  <div class="cBtn-div">
    <span class="btn-common mt-5 mb-3" @click="props.reset()">
      Clear
    </span>
  </div>
</template>

<style scoped>
.cBtn-div {
  margin-top: 0.25rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.font-bold {
  font-weight: 700;
}

.month {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.arrow-bns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow-bns span {
  cursor: pointer;
}

.arrow-bns .disabled {
  pointer-events: none;
  opacity: 0.5;
}

.year-row {
  margin-top: 1rem;
  text-align: center;
}

.year {
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.25rem;
  border-radius: 5px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;
}

.year:hover {
  box-shadow: inset -4px -4px 8px #fff, inset 4px 4px 8px #cccccc;
}

.year.active {
  transform: translateY(0.5px);
  box-shadow: inset -4px -4px 8px #fff, inset 4px 4px 8px #c1c1c1;
  background-color: #f5fbff;
  font-weight: 700;
}
</style>
