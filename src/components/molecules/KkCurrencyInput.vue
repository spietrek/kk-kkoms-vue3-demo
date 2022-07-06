<template>
  <input
    class="in-ctext-input tw-text-right"
    :class="[classes]"
    ref="inputRef"
    maxLength="12"
    @blur="args => $emit('blur', args)"
    @change="args => $emit('change', args)"
  />
</template>

<script>
import { watch } from 'vue'
import useCurrencyInput from 'vue-currency-input'

export default {
  name: 'CurrencyInput',

  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    classes: {
      type: String,
      default: '',
    },
  },

  emits: ['blur', 'change', 'update:modelValue'],

  setup(props, { emit }) {
    const { inputRef, setOptions, setValue } = useCurrencyInput(
      props.options,
      false,
    )

    watch(
      () => props.modelValue,
      value => {
        setValue(value)
      },
    )

    watch(
      () => props.options,
      options => {
        setOptions(options)
      },
    )

    return { inputRef }
  },
}
</script>
