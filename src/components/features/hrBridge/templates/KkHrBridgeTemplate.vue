<template>
  <section class="tw-body-font tw-text-gray-600">
    <div class="tw-p4 tw-container tw-mx-auto lg:tw-p-10">
      <KkHrBridgeWrapper
        :cash-detail-total-amount="cashDetailTotalAmount"
      ></KkHrBridgeWrapper>
    </div>
  </section>
</template>

<script>
import KkHrBridgeWrapper from '@/components/features/hrBridge/organisms/KkHrBridgeWrapper.vue'

export default {
  name: 'KkHrBridgeTemplate',

  components: {
    KkHrBridgeWrapper,
  },

  props: {
    cashDetailTotalAmount: {
      type: Number,
      default: null,
    },
  },
}
</script>
