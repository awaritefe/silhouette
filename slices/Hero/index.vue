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
    class="relative"
    :class="{ '!py-0': slice.variation === 'fullWidth' }"
  >
    <div
      class="grid grid-cols-1 place-items-center"
      :class="{
        'md:grid-cols-2 md:gap-8':
          slice.variation === 'horizontal' ||
          slice.variation === 'horizontalNoCta',
        'min-h-[28rem] relative overflow-hidden':
          slice.variation === 'fullWidth',
      }"
    >
      <div
        class="flex flex-col"
        :class="{
          'items-center text-center': slice.variation === 'default',
          'p-10 md:py-10 m-auto md:m-0 justify-self-end smoky-bg':
            slice.variation === 'fullWidth',
        }"
      >
        <PrismicRichText
          v-cloak
          :field="slice.primary.heading"
          class="heading heading--xl max-w-3xl mb-4 md:mb-8 text-center z-10"
          :class="{
            'md:!text-4xl !text-slate-50': slice.variation === 'fullWidth',
            'md:text-left relative':
              slice.variation !== 'default' && slice.variation !== 'fullWidth',
          }"
        />
        <PrismicRichText
          :field="slice.primary.body"
          class="max-w-lg mb-4 md:mb-8 mb:text-2xl text-center font-normal leading-7 mb:leading-10 font-body text-white z-10"
          :class="{
            'md:text-left relative':
              slice.variation !== 'default' && slice.variation !== 'fullWidth',
          }"
        />
        <PrismicLink
          :field="slice.primary.button_link || {}"
          class="z-10"
          :class="{
            'button mb-8 md:mb-10 mx-auto md:mx-0 relative ':
              slice.variation !== 'horizontalNoCta',
            '!mb-0 self-center': slice.variation === 'fullWidth',
          }"
        >
          {{ slice.primary.button_text }}
        </PrismicLink>
      </div>
      <PrismicImage
        :field="slice.primary.image"
        class="drop-shadow-xl rounded-xl"
        loading="lazy"
        :class="{ 'md:absolute z-0': slice.variation === 'fullWidth' }"
      />
    </div>
  </bounded>
</template>
