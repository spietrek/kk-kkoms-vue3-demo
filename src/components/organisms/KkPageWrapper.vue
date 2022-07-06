<template>
  <div>
    <div class="tw-p4 tw-flex tw-w-full tw-flex-wrap lg:tw-p-10">
      <KkUnderlineHeader :title="getPageTitle"></KkUnderlineHeader>

      <p class="tw-w-full tw-leading-relaxed tw-text-gray-500 lg:tw-w-1/2">
        {{ summary }}
      </p>
    </div>

    <div class="tw-px4 lg:tw-px-10">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import KkUnderlineHeader from '@/components/atoms/KkUnderlineHeader.vue'

const formatAmount = abc => {
  return '$' + abc.toLocaleString()
}

export default {
  name: 'KKPageWrapper',

  components: { KkUnderlineHeader },

  computed: {
    getPageTitle() {
      return this.$t('organisms.kkpagewrapper.title', {
        pageName: this.title,
      })
    },
    getPosChecks() {
      return this.$t('src\\components\\molecules\\forms\\kkcheck.thePosShows', {
        posChecksAmount: formatAmount(this.posChecksAmount),
      })
    },
    getInputError() {
      return this.$t('src\\components\\molecules\\forms\\kkcheck.inputName', {
        inputName: this.inputName,
      })
    },
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
  },
}
</script>
