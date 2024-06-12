<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.MediaSlice>([
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
    <div class="grid md:grid-cols-2 gap-8 place-items-center">
      <PrismicImage
        :field="slice.primary.image"
        class="rounded-lg"
        :class="{ 'md:order-2': slice.variation === 'mediaImageRight' }"
      />
      <div>
        <PrismicText
          :field="slice.primary.heading"
          wrapper="h2"
          class="heading heading--lg text-center md:text-left mb-12"
        />
        <PrismicRichText
          :field="slice.primary.copy"
          class="font-body text-2xl text-slate-600 max-w-md text-center md:text-left leading-10"
        />
      </div>
    </div>
  </Bounded>
</template>
