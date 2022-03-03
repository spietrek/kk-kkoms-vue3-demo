<template>
  <div class="tw-hero tw-min-h-screen tw-bg-base-300">
    <div class="tw-hero-content tw-text-center">
      <div class="tw-max-w-sm">
        <h1 class="tw-mb-5 tw-text-5xl tw-font-bold">{{ heroDate }}</h1>
        <p class="tw-mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="tw-btn tw-btn-primary" @click="updateDate">
          Update Date
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KkHero',

  inject: {
    heroDate: {
      from: 'heroDate',
      default: () => 'N/A',
    },
    updateDate: {
      from: 'updateDate',
      default: () => () => {},
    },
  },
}
</script>
