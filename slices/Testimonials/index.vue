<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps(["slice", "index", "slices", "context"])
);

const testimonials = computed(() => {
  return props.slice.primary.testimonials;
});
</script>

<template>
  <bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <PrismicText
      :field="slice.primary.heading"
      wrapper="h2"
      class="heading heading--lg text-center mb-6 md:mb-12"
    />

    <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
      <div
        v-for="item in testimonials"
        :key="item.testimonial.data.uid"
        class="bg-white shadow-lg rounded-lg px-8 md:px-12 py-6 md:py-12 grid content-between"
      >
        <PrismicRichText
          :field="item.testimonial.data.quote"
          class="text-2xl font-body text-slate-700 mb-8"
        />
        <div class="flex items-center">
          <PrismicImage
            :field="item.testimonial.data.avatar"
            class="rounded-full mr-4 aspect-square"
            height="56"
            width="56"
            loading="lazy"
          />
          <div>
            <p class="text-sm w-full font-medium text-slate-700">
              {{ item.testimonial.data.name }}
            </p>
            <p class="text-base w-full text-slate-500">
              {{ item.testimonial.data.job_title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </bounded>
</template>
