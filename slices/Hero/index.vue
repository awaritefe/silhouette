<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      class="grid grid-cols-1 place-items-center"
      :class="{ 'md:grid-cols-2': slice.variation === 'horizontal' }"
    >
      <div
        class="flex flex-col"
        :class="{ 'items-center text-center': slice.variation === 'default' }"
      >
        <PrismicRichText
          :field="slice.primary.heading"
          class="heading heading--xl max-w-3xl mb-4 md:mb-8"
        />
        <PrismicRichText
          :field="slice.primary.body"
          class="max-w-lg mb-4 md:mb-8 text-2xl font-normal leading-10 font-body text-slate-600"
        />
        <PrismicLink
          :field="slice.primary.button_link"
          class="button mb-8 md:mb-10"
        >
          {{ slice.primary.button_text }}
        </PrismicLink>
      </div>
      <PrismicImage
        :field="slice.primary.image"
        class="drop-shadow-xl rounded-xl"
      />
    </div>
  </bounded>
</template>