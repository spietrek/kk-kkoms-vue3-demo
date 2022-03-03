<template>
  <div class="tw-rounded-lg tw-bg-gray-100 tw-p-6">
    <img
      class="tw-mb-6 tw-h-40 tw-w-full tw-rounded tw-object-cover tw-object-center"
      :src="imageUrl"
      alt="content"
    />
    <h3
      class="tw-title-font tw-text-xs tw-font-medium tw-tracking-widest tw-text-indigo-500"
    >
      SUBTITLE
    </h3>
    <h2
      class="tw-title-font tw-mb-4 tw-text-lg tw-font-medium tw-text-gray-900"
    >
      {{ title }}
    </h2>
    <p class="tw-text-base tw-leading-relaxed">
      Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
      disrupt edison bulbche.
    </p>
    <router-link
      class="rounded-btn tw-btn tw-btn-primary tw-mt-4 tw-w-full"
      :to="link"
    >
      View
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'KkImageCard',

  props: {
    title: {
      type: String,
      default: 'N/A',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '/',
    },
  },
}
</script>
