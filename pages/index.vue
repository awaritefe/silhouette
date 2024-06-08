<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("page", "home")
);

async function init() {
  await useSeoMeta({
    title: page.value?.data.meta_title ?? undefined,
    description: page.value?.data.meta_description ?? undefined,
    ogImage: prismic.asImageSrc(page.value?.data.meta_image ?? undefined),
  });
}
init();
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
