<script lang="ts" setup>
defineProps({
  as: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <Component
    :is="as || 'section'"
    v-cloak
    class="md:container md:mx-auto px-4 py-10 md:px-6 lg:py-16"
  >
    <div class="max-w-6xl w-full mx-auto">
      <slot />
    </div>
  </Component>
</template>
