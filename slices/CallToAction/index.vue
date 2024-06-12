<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CallToActionSlice>([
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
    <div
      class="max-w-4xl mx-auto md:px-12 px-4 py-12 grid place-items-center rounded-lg shadow-lg bg-gradient-to-tr from-cyan-50 via-white bg-emerald-50"
    >
      <PrismicRichText
        :field="slice.primary.heading"
        class="mb-8 text-center heading heading--sm"
      />
      <PrismicRichText
        :field="slice.primary.copy"
        class="text-center text-slate-600 mb-8"
      />
      <PrismicLink
        :field="slice.primary.button_link"
        class="button mb-8 md:mb-10"
      >
        {{ slice.primary.button_text }}
      </PrismicLink>
    </div>
  </Bounded>
</template>
