<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("page", "home", {
    fetchLinks: [
      "testimonial.quote",
      "testimonial.avatar",
      "testimonial.name",
      "testimonial.job_title",
    ],
  })
);
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
