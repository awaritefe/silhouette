<script setup lang="ts">
import { components } from "~/slices";
const prismic = usePrismic();
const route = useRoute();

// Fetch data asynchronously
// Define the async function to fetch the page data
const fetchPageData = async () => {
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
    return response;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};

// Use useAsyncData to fetch the page data
const { data: page, error } = useAsyncData(
  route.params.uid as string,
  fetchPageData
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
  <Bounded v-else-if="error">
    <p class="text-2xl font-body text-slate-700">
      Error fetching page data. Please try again later.
    </p>
  </Bounded>
  <!-- Optionally, render a loading indicator while data is being fetched -->
  <Bounded v-else>
    <p class="text-2xl font-body text-slate-700 mb-8">Loading...</p>
  </Bounded>
</template>
