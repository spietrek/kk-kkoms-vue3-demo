<template>
  <div class="hr-bridge-wrapper">
    <div class="tw-stats tw-shadow-2xl">
      <div class="tw-stat">
        <div class="tw-stat-title">Posts Created (using Composition)</div>
        <div class="tw-stat-value tw-text-primary">{{ postsCreated }}</div>
        <div class="tw-stat-desc">
          {{ postsPercentageStatus }} from last month
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KkHrBridgeWrapper2',

  computed: {
    postsPercentageStatus() {
      const trend = this.postsPercentage > 0 ? '↗︎' : '↘︎'
      return `${trend} ${Math.abs(this.postsPercentage)}%`
    },
  },

  props: {
    postsCreated: {
      type: Number,
      default: 0,
    },
    postsPercentage: {
      type: Number,
      default: 0,
    },
  },
}
</script>
