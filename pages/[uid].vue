<script setup lang="ts">
import { components } from "~/slices";
const prismic = usePrismic();
const route = useRoute();

// Fetch data asynchronously
const { data: page, error } = useAsyncData(
  route.params.uid as string,
  async () => {
    try {
      const response = await prismic.client.getByUID(
        "page",
        route.params.uid as string,
        {
          fetchLinks: [
            "testimonial.quote",
            "testimonial.avatar",
            "testimonial.name",
            "testimonial.job_title",
          ],
        }
      );
      // Set SEO metadata
      await useSeoMeta({
        title: response.data.meta_title ?? undefined,
        description: response.data.meta_description ?? undefined,
        ogImage: prismic.asImageSrc(response.data.meta_image ?? undefined),
      });
      return response;
    } catch (error) {
      // Handle error
      console.error("Error fetching page data:", error);
      throw error;
    }
  }
);
</script>

<template>
  <!-- Render the SliceZone only if page data is available -->
  <div v-if="page">
    <SliceZone
      wrapper="main"
      :slices="page.data.slices ?? []"
      :components="components"
    />
  </div>
  <!-- Optionally, render an error message if data fetching fails -->
  <div v-else-if="error">
    <p>Error fetching page data. Please try again later.</p>
  </div>
  <!-- Optionally, render a loading indicator while data is being fetched -->
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
