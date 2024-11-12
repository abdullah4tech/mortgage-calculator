<script setup>
import input_box from '@/components/input_box.vue';
import { ref } from 'vue';
import WrapperC from './components/WrapperC.vue';
import AnswerCard from './components/AnswerCard.vue';
import clear from './components/Icon/clear.vue';
import Resulticon from './components/Icon/resulticon.vue';

// Define the reactive ref for the selected mortgage type
const mortgage_type = ref('');

// Method to clear all fields
const clearAll = () => {
  mortgage_type.value = '';
};

// Dynamic class for the radio buttons
const getRadioClass = (type) =>
  mortgage_type.value === type ? 'bg-lime-50 border-lime-300' : '';
</script>
<template>
  <!-- Outer container to center the section on the screen -->
  <div class="flex items-center justify-center min-h-screen bg-green-100 transition-colors duration-500">
    <section class="flex items-stretch max-w-5xl mx-auto font-jakarta rounded-3xl bg-white shadow-transparent transition-all duration-500">
      <!-- Left Section (Mortgage Calculator) -->
      <WrapperC class="flex-1 flex flex-col rounded-l-3xl bg-white p-7 space-y-5 z-50 w-7 transition-transform duration-300 ease-in-out">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl font-bold">Mortgage Calculator</h1>
          <span class="text-blue-600 cursor-pointer underline hover:text-blue-800 transition-colors duration-200" @click="clearAll">Clear All</span>
        </div>

        <!-- Input boxes with icons on the left or right -->
        <input_box width="w-[300px]" label="First Box" type="text" toggle="left" icon="£" />
        <div class="flex space-x-4 mt-4">
          <input_box label="Mortgage Term" width="w-[100px]" type="text" toggle="right" icon="years" />
          <input_box label="Interest Rate" width="w-[100px]" type="text" toggle="right" icon="%" />
        </div>

        <!-- Mortgage Type Radio Buttons -->
        <div>
          <span class="font-semibold">Mortgage Type</span>
          <div class="flex flex-col mt-3 space-y-3">
            <!-- Radio Button for "Repayment" -->
            <label
              :class="`p-3 flex items-center border rounded-md cursor-pointer transition-all duration-300 ease-in-out ${getRadioClass('Repayment')}`"
            >
              <input
                type="radio"
                class="mr-3 outline-none"
                name="mortgage_type"
                value="Repayment"
                v-model="mortgage_type"
              />
              <span>Repayment</span>
            </label>

            <!-- Radio Button for "Interest Only" -->
            <label
              :class="`p-3 flex items-center border rounded-md cursor-pointer transition-all duration-300 ease-in-out ${getRadioClass('Interest Only')}`"
            >
              <input
                type="radio"
                class="mr-3 outline-none"
                name="mortgage_type"
                value="Interest Only"
                v-model="mortgage_type"
              />
              <span>Interest Only</span>
            </label>
          </div>
        </div>

        <button class="flex p-2 w-72 items-center justify-center gap-3 rounded-3xl bg-lime-400 hover:bg-lime-500 transition-colors duration-300">
          <div>
            <Resulticon />
          </div>
          <span>Calculate Repayments</span>
        </button>
      </WrapperC>

      <!-- Right Section (Results) -->
      <WrapperC class="flex-1 flex flex-col rounded-r-3xl bg-emerald-900 left-radius p-7 space-y-7 transition-all duration-300 ease-in-out">
        <div class="flex flex-col space-y-3">
          <h2 class="text-white font-semibold text-2xl">Your results</h2>
          <p class="text-slate-200 font-thin pb-7">
            Your results are shown below based on the info.rmation you provided. To adjust the result, edit the form and click "calculate repayments" again.
          </p>
          <AnswerCard />
        </div>
        <div class="hidden flex-col items-center justify-center gap-4">
          <clear />
          <div class="space-y-3 flex flex-col items-center">
            <h2 class="text-white font-semibold text-xl">Result shown here</h2>
            <p class="text-slate-200 text-center">Complete th form and click "calculate repayments" to see what your monthly payment will be</p>
          </div>
        </div>
      </WrapperC>
    </section>
  </div>
</template>

<style scoped>
.left-radius {
  border-bottom-left-radius: 40px;
}

input:focus {
  background-color: #a3e635;
  transition: background-color 0.3s ease-in-out;
}

label:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

</style>
