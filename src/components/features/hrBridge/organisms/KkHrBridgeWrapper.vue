<template>
  <div class="hr-bridge-wrapper">
    <div class="tw-stats tw-shadow-2xl">
      <div class="tw-stat">
        <div class="tw-stat-title">
          Cash Detail Total Amount (from model): {{ model }}.
        </div>
        <div class="tw-stat-value tw-text-primary">
          <CurrencyInput
            autocomplete="off"
            v-model="model"
            @change="handleCashModelChange($event)"
            :options="{
              currency: 'CAD',
              locale: 'fr-CA',
              precision: 2,
              valueRange: {
                min: 0,
              },
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrencyInput from '@/components/molecules/KkCurrencyInput.vue'

export default {
  name: 'KkHrBridgeWrapper',

  components: { CurrencyInput },

  data() {
    return {
      viewModel: this.cashDetailTotalAmount,
    }
  },

  computed: {
    model: {
      get() {
        return this.viewModel
      },
      set(newValue) {
        this.viewModel = newValue
      },
    },
  },

  methods: {
    handleCashModelChange(event) {
      const value = event?.detail.number ?? null
      if (value) {
        this.viewModel = value
        if (this.onUpdateCashInStore) {
          this.onUpdateCashInStore(this.viewModel)
        }
      }
    },
  },

  watch: {
    cashDetailTotalAmount(newValue, oldValue) {
      console.log('cashDetailTotalAmount changed', newValue, oldValue)
      if (newValue !== oldValue) {
        this.viewModel = newValue
      }
    },
  },

  props: {
    cashDetailTotalAmount: {
      type: Number,
      default: null,
    },
    onUpdateCashInStore: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
