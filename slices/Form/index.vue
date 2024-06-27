<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { useForm } from "vee-validate";
import * as yup from "yup";
import axios from "axios";

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

const { values, errors, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    name: yup.string().min(2).required(),
    subject: yup.string().min(2).required(),
    message: yup.string().min(20).required(),
  }),
});

async function onSubmit() {
  try {
    // Convert Proxy object to plain object
    const formData = { ...values };
    console.log("Sending data:", formData); // Debug log
    const response = await axios.post("http://localhost:8000/send", formData);
    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
const [name, nameAttrs] = defineField("name", {
  validateOnModelUpdate: false,
});
const [email, emailAttrs] = defineField("email", {
  validateOnModelUpdate: false,
});
const [subject, subjectAttrs] = defineField("subject", {
  validateOnModelUpdate: false,
});
const [message, messageAttrs] = defineField("message", {
  validateOnModelUpdate: false,
});
</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <pre>values: {{ values }}</pre>
    <pre>errors: {{ errors }}</pre>
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
        <form novalidate @submit.prevent="onSubmit">
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
                v-model="name"
                v-bind="nameAttrs"
                placeholder="Jane Doe"
              />
              <div class="text-red-600 min-h-6">{{ errors.name }}</div>
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
                v-model="email"
                v-bind="emailAttrs"
                placeholder="Jane.Doe@example.com"
              />
              <div class="text-red-600 min-h-6">{{ errors.email }}</div>
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
              v-model="subject"
              v-bind="subjectAttrs"
              placeholder="Subject"
            />
            <div class="text-red-600 min-h-6">{{ errors.subject }}</div>
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
              v-model="message"
              v-bind="messageAttrs"
              placeholder="Message..."
            ></textarea>
            <div class="text-red-600 min-h-6">{{ errors.message }}</div>
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
