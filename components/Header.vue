<script lang="ts" setup>
const settings = useSettings();

const toggleMenu = ref(false);

function handleResize() {
  if (window.innerWidth >= 768) {
    // md breakpoint in Tailwind
    toggleMenu.value = true;
  } else {
    toggleMenu.value = false;
  }
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize(); // Set initial state based on current window size
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <Bounded as="header" class="pb-0 md:pb-10">
    <div class="flex justify-between items-center gap-4 flex-col md:flex-row">
      <Logo />
      <span
        class="md:hidden absolute top-12 right-8"
        @click="toggleMenu = !toggleMenu"
      >
        <icon :name="settings.data.nav_menu_button" />
        <p class="sr-only">{{ settings.data.nav_menu_button }}</p>
      </span>
      <ul
        v-if="toggleMenu"
        class="grid md:flex text-center"
        :class="{
          hidden: !toggleMenu && window.innerWidth < 768,
          block: toggleMenu || window.innerWidth >= 768,
        }"
      >
        <li
          v-for="item of settings.data.navigation"
          :key="item.label || ''"
          class="p-4 box-shadow-underline hover:text-blue-950"
        >
          <PrismicLink :field="item.link">
            {{ item.label }}
          </PrismicLink>
        </li>
        <li />
      </ul>
      <PrismicLink
        v-if="toggleMenu"
        :field="settings.data.button_link"
        class="button text-center"
      >
        {{ settings.data.button_text }}
      </PrismicLink>
    </div>
  </Bounded>
</template>
