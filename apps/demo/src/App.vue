<script setup lang="ts">
import { BaseButton } from '@ui/index'

function handleClick() {
  // example click handler to verify wiring
  console.log('BaseButton clicked')
}
</script>

<template>
  <h1>UI Components Demo</h1>
  <BaseButton variant="primary" size="md" @click="handleClick">
    Click Me
  </BaseButton>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
