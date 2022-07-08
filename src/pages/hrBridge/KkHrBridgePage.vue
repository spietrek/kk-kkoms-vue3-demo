<template>
  <KkPageWrapper title="HR Bridge">
    Cash Detail Total Amount (from Store): {{ cashDetailTotalAmount }}
    <h1 v-if="isLoading">Loading...</h1>
    <KkHrBridgeTemplate
      v-if="!isLoading"
      :cash-detail-total-amount="cashDetailTotalAmount"
      :on-update-cash-in-store="handleUpdateCashInStore"
    ></KkHrBridgeTemplate>

    <!-- <KkHrBridgeTemplate2>
      <KkHrBridgeWrapper2
        :posts-created="postsCreated"
        :posts-percentage="postsPercentage"
      ></KkHrBridgeWrapper2>
    </KkHrBridgeTemplate2> -->

    <button class="tw-btn tw-btn-primary tw-btn-sm" @click="handleRetrieveCash">
      Retrieve Cash
    </button>
  </KkPageWrapper>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import KkPageWrapper from '@/components/organisms/KkPageWrapper.vue'
import KkHrBridgeTemplate from '@/components/features/hrBridge/templates/KkHrBridgeTemplate.vue'
// import KkHrBridgeTemplate2 from '@/components/features/hrBridge/templates/KkHrBridgeTemplate2.vue'
// import KkHrBridgeWrapper2 from '@/components/features/hrBridge/organisms/KkHrBridgeWrapper2.vue'

export default {
  name: 'KkHrBridgePage',

  components: {
    KkPageWrapper,
    KkHrBridgeTemplate,
    // KkHrBridgeTemplate2,
    // KkHrBridgeWrapper2,
  },

  data() {
    return {
      postsCreated: 120,
      postsPercentage: 1.2,
    }
  },

  computed: {
    ...mapGetters('hrBridge', ['cashDetailTotalAmount', 'isLoading']),
  },

  methods: {
    ...mapActions('hrBridge', ['getCashAsync', 'updateCash']),

    handleRetrieveCash() {
      this.getCashAsync()
    },

    handleUpdateCashInStore(newValue) {
      this.updateCash(newValue)
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
