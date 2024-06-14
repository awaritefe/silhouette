<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProjectGridSlice>([
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
    <div>
      <PrismicRichText :field="slice.primary.heading" />
      <div class="project-grid gap-2 shadow-lg">
        <div
          v-for="(item, index) in slice.primary.images"
          :key="item.uid"
          :class="`grid-area${index + 1} relative`"
        >
          <PrismicImage :field="item.image" class="h-full" />
          <div
            class="absolute w-full h-full bg-white/[.5] top-0 left-0 content-center p-12"
          >
            <PrismicRichText
              :field="item.title"
              wrapper="h3"
              class="heading heading--md text-slate-700 mb-8"
            />
            <PrismicRichText
              :field="item.copy"
              class="text-2xl font-body text-slate-700 mb-8"
            />
          </div>
        </div>
      </div>
    </div>
  </Bounded>
</template>
