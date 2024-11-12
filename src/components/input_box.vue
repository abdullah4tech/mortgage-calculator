<script setup>
import WrapperC from '@/components/WrapperC.vue';

const props = defineProps({
  label: String,
  type: String,
  toggle: {
    type: String,
    default: 'left' // default to 'left'
  },
  icon: String,
  width: {
    type: String,
    default: 'w-80' // default width class
  }
});
</script>

<template>
  <WrapperC>
    <label :for="props.label">{{ props.label }}</label>
    
    <!-- Wrapper div that detects focus-within -->
    <div class="focus-within:border-lime-400 flex items-center border border-green-950 rounded-md overflow-hidden w-fit">
      <!-- Input element -->
      <input 
        :class="`${props.width} h-full outline-none p-2 bg-transparent`"
        :id="props.label"
        :type="props.type"
      />

      <!-- Single span element with conditional positioning -->
      <span 
        :class="`px-4 py-3 transition-colors duration-200 ${props.icon && 'bg-green-100'} font-semibold ${
          props.toggle === 'left' ? 'order-first' : 'order-last'
        }`"
      >
        {{ props.icon }}
      </span>
    </div>
  </WrapperC>
</template>

<style scoped>
/* Only change background of the span that follows the focused input */
input:focus + span {
  background-color: #a3e635;
}

</style>
