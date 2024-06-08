<script lang="ts" setup>
const props = defineProps({
  as: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <Component :is="as || 'section'" class="md:container md:mx-auto px-4">
    <div class="max-w-6xl w-full mx-auto">
      <slot />
    </div>
  </Component>
</template>
