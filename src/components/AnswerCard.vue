<script setup lang="ts">
import WrapperC from './WrapperC.vue';
</script>



<template>
  <WrapperC class="flex flex-col w-96 h-64 gap-7 bg-emerald-950 text-white max-w-80 border-t-4 rounded-b-md rounded-t-md border-lime-400 p-7">
    <div class="flex flex-col gap-3">
      <span class="text-slate-200 font-thin">Your monthly repayments</span>
      <h1 class="text-lime-400 font-bold text-5xl">£1,797.74</h1>
    </div>
    <hr class="border-gray-200">
    <div class="flex flex-col gap-1">
      <span class="text-slate-200 font-thin">Total you will repay over the term</span>
      <h2 class="text-2xl font-semibold">£539,322.94</h2>
    </div>
  </WrapperC>
</template>