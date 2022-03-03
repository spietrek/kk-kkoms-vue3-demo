<template>
  <div class="tw-mb-6 tw-w-full lg:tw-w-1/2">
    <h1
      class="tw-title-font tw-text-neutral-400 tw-mb-2 tw-text-2xl tw-font-medium sm:tw-text-3xl"
    >
      {{ title }}
    </h1>

    <div class="tw-h-1 tw-w-40 tw-rounded tw-bg-indigo-500"></div>
  </div>
</template>

<script>
export default {
  name: 'KkUnderlineHeader',

  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
