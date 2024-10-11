<!-- eslint-disable no-unused-vars -->
<script setup>
import { defineProps, ref, watchEffect } from 'vue';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/vue/solid';
import axios from 'axios';

import NoData from '../images/no-data.png';

const filteredData = ref([]);
const props = defineProps({
  activeYear: {
    required: true,
    type: Number
  },
  activeMonth: {
    required: true,
    type: Number
  }
});

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const fetchData = () => {
  axios.get(`http://localhost:8246/api/getData/${props.activeYear}/${props.activeMonth}`)
    .then(response => {
      console.log('hello', response.data)
      filteredData.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

const addData = () => {
  const newObject = {
    year: 2024,
    months: [{ id: 0, name: 'January', expenses: 200 }]
  };

  axios.post('http://localhost:8246/api/saveData', newObject)
    .then(response => {
      console.log(response.data.message);
      this.fetchData();
    })
    .catch(error => {
      console.error('Error adding data:', error);
    });
};

const updateData = (id) => {
  const updatedObject = {
    months: [{ id: 0, name: 'January', expenses: 500 }]
  };

  axios.put(`http://localhost:8246/api/updateData/${props.activeYear}/${props.activeMonth}/${id}`, updatedObject)
    .then(response => {
      console.log(response.data.message);
      this.fetchData();
    })
    .catch(error => {
      console.error('Error updating data:', error);
    });
};

const deleteData = (id) => {
  axios.delete(`http://localhost:8246/api/data/${props.activeYear}/${props.activeMonth}/${id}`)
    .then(response => {
      console.log(response.data.message);
      this.fetchData();
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    });
};

watchEffect(() => {
  fetchData();
}, []);
</script>

<template>
  <div class="p-2">
    <div class="text-medium font-gray">Expense Report</div>
    <div class="d-flex align-items-center mt-2">
      <div class="text-medium text-semibold">{{ activeYear }}</div>
      <div class="item-center ml-auto btn-common w-7">
        <PlusIcon style="width: 16px; height: 16px; margin-right: 2px;" />
        Add Expense
      </div>
    </div>
    <div class="text-small mt-2 text-semibold">{{ monthNames[props.activeMonth] }}</div>
    <div>
      <ul class="grid grid-cols-2" v-if="filteredData.expenses && filteredData.expenses.length > 0">
        <li class="data-card" v-for="expense in filteredData.expenses" :key="expense.id">
          {{ expense.date }} - {{ expense.paidFor }} : ${{ expense.expenseAmount }}
          <span class="ml-auto cursor-pointer">
            <PencilIcon style="width: 18px; height: 18px; margin-right: 4px;" />
            <TrashIcon style="width: 18px; height: 18px;" />
          </span>
        </li>
      </ul>
      <div v-else>
        <div class="item-center mt-no-data">
          <div class="no-data">
            <img :src="NoData" alt="No data available" />
          </div>
        </div>
        <span class="item-center text-xlarge font-gray">No Records</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  padding: 0.25rem;
  max-height: calc(59vh);
  overflow-y: auto;
}

li {
  list-style-type: none;
}

.mt-no-data {
  margin-top: 5rem;
}

.no-data {
  display: block;
}

.no-data img {
  width: 100px;
  height: 100px;
}

.data-card {
  display: flex;
  padding: 0.75rem;
  margin: 0.25rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  height: auto;
}
</style>
