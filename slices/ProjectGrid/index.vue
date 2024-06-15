<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps(["slice", "index", "slices", "context"])
);
</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <PrismicRichText
      :field="slice.primary.heading"
      class="heading heading--md text-left mb-6 md:mb-12"
    />
    <div>
      <div
        class="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-4 md:gap-2 shadow-lg relative"
      >
        <div
          v-for="(item, index) in props.slice.primary.images"
          :key="item.uid"
          :class="`grid-area${index + 1} first:relative last:relative`"
          class="p-px max-h-96 md:max-h-fit"
        >
          <PrismicImage
            :field="item.image"
            class="h-full w-full cursor-pointer object-cover"
            :class="`hovered${index + 1}`"
          />
          <div
            class="absolute w-full h-full bg-white/[.7] top-0 left-0 content-center p-5 md:p-12 pointer-events-none even:z-10"
          >
            <PrismicRichText
              v-if="item.title && item.title.length > 0"
              :field="item.title"
              class="heading heading--md !text-sky-800 mb-8"
            />

            <PrismicRichText
              v-if="item.copy && item.copy.length > 0"
              :field="item.copy"
              class="text-base md:text-2xl font-body text-slate-900 mb-8"
            />
          </div>
        </div>
      </div>
    </div>
  </Bounded>
</template>
