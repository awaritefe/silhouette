<script setup>
const settings = useSettings();
const { asImageSrc } = usePrismic();

async function init() {
  await useSeoMeta({
    title: settings.value?.data.site_title,
    description: settings.value?.data.meta_description,
    ogImage: asImageSrc(settings.value?.data.og_image),
  });
}
init();
</script>

<template>
  <div
    class="fixed inset-0 bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1]"
  >
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style></style>
