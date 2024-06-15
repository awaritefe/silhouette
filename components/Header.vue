<script lang="ts" setup>
const settings = useSettings();
</script>

<template>
  <Bounded as="header" class="pb-0 md:pb-10">
    <div class="flex justify-between items-center gap-4 flex-col sm:flex-row">
      <Logo />
      <ul class="flex">
        <li
          v-for="item of settings.data.navigation"
          :key="item.label || ''"
          class="p-4 box-shadow-underline hover:text-blue-950"
        >
          <PrismicLink :field="item.link">
            {{ item.label }}
          </PrismicLink>
        </li>
      </ul>
    </div>
  </Bounded>
</template>
