<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FormSlice>([
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
    <div class="md:flex">
      <PrismicImage
        :field="slice.primary.image"
        class="w-full md:w-6/12 xl:w-4/12 object-cover rounded-lg"
      />
      <div class="w-full md:w-6/12 xl:w-8/12 p-8">
        <PrismicText
          :field="slice.primary.title"
          class="heading heading--sm pb-4"
          wrapper="h2"
        />
        <form>
          <div class="gap-2 lg:flex">
            <div class="inline-grid w-full lg:w-6/12">
              <label class="label lg:mt-2" for="name">{{
                slice.primary.full_name
              }}</label>
              <input
                class="p-2 rounded-lg bg-slate-100"
                type="text"
                id="name"
                name="name"
                placeholder="Jane Doe"
              />
            </div>
            <div class="inline-grid w-full lg:w-6/12">
              <label class="label mt-2" for="email">{{
                slice.primary.email
              }}</label>
              <input
                class="p-2 rounded-lg bg-slate-100"
                type="email"
                id="email"
                name="email"
                placeholder="Jane.Doe@example.com"
              />
            </div>
          </div>
          <div class="inline-grid w-full">
            <label class="label mt-2" for="subject">{{
              slice.primary.subject
            }}</label>
            <input
              class="p-2 rounded-lg bg-slate-100"
              type="subject"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div class="inline-grid w-full">
            <label class="label mt-2" for="message">{{
              slice.primary.text_area
            }}</label>
            <textarea
              class="min-h-[160px] p-2 rounded-lg bg-slate-100"
              type="message"
              id="message"
              name="message"
              placeholder="Message..."
            ></textarea>
          </div>
          <div class="inline-grid w-full">
            <input
              class="button p-2 mt-4 m-auto md:mx-0"
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  </Bounded>
</template>
