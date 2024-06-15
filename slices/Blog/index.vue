<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.BlogSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <article
      class="bg-white p-4 sm:p-8 md:p-10 custom-box-shadow custom-clip-path"
    >
      <PrismicRichText :field="slice.primary.textarea" class="text-slate-700" />
    </article>
  </Bounded>
</template>
