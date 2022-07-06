<template>
  <div class="hr-bridge-wrapper">
    <div class="tw-stats tw-shadow-2xl">
      <div class="tw-stat">
        <div class="tw-stat-title">
          Cash Detail Total Amount. Model: {{ model }}.
        </div>
        <div class="tw-stat-value tw-text-primary">
          <CurrencyInput
            autocomplete="off"
            v-model="model"
            @change="handleCashChange($event)"
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
      cashNumber: null,
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
    handleCashChange(event) {
      this.viewModel = event?.detail?.number ?? this.model
      if (this.onUpdateCash) {
        this.onUpdateCash(this.viewModel)
      }
    },
  },

  watch: {
    cashDetailTotalAmount(newValue, oldValue) {
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
    onUpdateCash: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
