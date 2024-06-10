<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FeaturesSlice>([
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
    <PrismicText
      :field="slice.primary.heading"
      wrapper="h2"
      class="heading heading--md text-center mb-12"
    />
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl mx-auto place-items-center sm:place-items-start"
    >
      <div
        v-for="item in slice.primary.feature_content"
        :key="item.icons ?? ''"
        class="max-w-xs grid sm:place-items-start place-items-center text-center sm:text-center"
      >
        <div v-if="item.icons" class="mb-5">
          <icon :name="item.icons" />
        </div>
        <PrismicRichText
          :field="item.title"
          wrapper="h3"
          class="heading heading--sm !font-medium pb-3"
        />
        <p
          class="text-base font-medium font-body text-slate-600 md:leading-relaxed"
        >
          {{ item.copy }}
        </p>
      </div>
    </div>
  </Bounded>
</template>
