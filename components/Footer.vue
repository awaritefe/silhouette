<script lang="ts" setup>
const settings = useSettings();

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <Bounded as="footer" class="bg-white custom-clip-path custom-box-shadow">
    <div class="flex justify-between items-center gap-4 flex-col sm:flex-row">
      <Logo />
      <p class="text-xs">©{{ currentYear }} {{ settings.data.site_title }}</p>
      <ul class="flex">
        <li
          v-for="item of settings.data.navigation"
          :key="item.label || ''"
          class="p-4"
        >
          <PrismicLink :field="item.link">
            {{ item.label }}
          </PrismicLink>
        </li>
      </ul>
    </div>
  </Bounded>
</template>
