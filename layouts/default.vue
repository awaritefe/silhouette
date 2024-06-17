<script setup>
const settings = useSettings();
const { asImageSrc } = usePrismic();

const title = settings.value?.data.site_title;
const description = settings.value?.data.meta_description;
const ogImage = asImageSrc(settings.value?.data.og_image);

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
  ],
});
</script>

<template>
  <div class="inset-0 bg-white z-[-1]">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style></style>
