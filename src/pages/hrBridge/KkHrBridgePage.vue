<template>
  <KkPageWrapper title="HR Bridge">
    <KkHrBridgeTemplate
      :cash-detail-total-amount="cashDetailTotalAmount"
    ></KkHrBridgeTemplate>

    <KkHrBridgeTemplate2>
      <KkHrBridgeWrapper2
        :posts-created="postsCreated"
        :posts-percentage="postsPercentage"
      ></KkHrBridgeWrapper2>
    </KkHrBridgeTemplate2>

    <button
      class="tw-btn tw-btn-primary tw-btn-sm"
      @click="handleUpdateCurrency"
    >
      Update Currency
    </button>
  </KkPageWrapper>
</template>

<script>
import KkPageWrapper from '@/components/organisms/KkPageWrapper.vue'
import KkHrBridgeTemplate from '@/components/features/hrBridge/templates/KkHrBridgeTemplate.vue'
import KkHrBridgeTemplate2 from '@/components/features/hrBridge/templates/KkHrBridgeTemplate2.vue'
import KkHrBridgeWrapper2 from '@/components/features/hrBridge/organisms/KkHrBridgeWrapper2.vue'

export default {
  name: 'KkHrBridgePage',

  components: {
    KkPageWrapper,
    KkHrBridgeTemplate,
    KkHrBridgeTemplate2,
    KkHrBridgeWrapper2,
  },

  data() {
    return {
      postsCreated: 120,
      postsPercentage: 1.2,
      cashDetailTotalAmount: null,
    }
  },

  methods: {
    handleUpdateCurrency() {
      this.cashDetailTotalAmount = 9.99
    },
  },

  provide() {
    return {
      postsCreated: this.postsCreated,
      postsPercentage: this.postsPercentage,
    }
  },
}
</script>
