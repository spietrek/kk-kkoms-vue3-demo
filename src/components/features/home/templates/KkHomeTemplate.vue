<template>
  <section class="tw-body-font tw-text-gray-600">
    <div class="tw-p4 tw-container tw-mx-auto lg:tw-p-10">
      <KkHomeWrapper></KkHomeWrapper>
    </div>
  </section>
</template>

<script>
import KkHomeWrapper from '@/components/features/home/organisms/KkHomeWrapper.vue'

export default {
  name: 'KkHomeTemplate',

  components: {
    KkHomeWrapper,
  },
}
</script>
