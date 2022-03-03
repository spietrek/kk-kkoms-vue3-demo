<template>
  <KkPageWrapper title="DCB">
    <KkDcbTemplate></KkDcbTemplate>
  </KkPageWrapper>
</template>

<script>
import KkPageWrapper from '@/components/organisms/KkPageWrapper.vue'
import KkDcbTemplate from '@/components/features/dcb/templates/KkDcbTemplate.vue'
import { computed } from 'vue'

export default {
  name: 'KkDcbPage',

  components: {
    KkPageWrapper,
    KkDcbTemplate,
  },

  data() {
    return {
      heroDate: new Date().toLocaleString(),
    }
  },

  provide() {
    return {
      heroDate: computed(() => this.heroDate),
      updateDate: this.handleUpdateDate,
    }
  },

  methods: {
    handleUpdateDate() {
      this.heroDate = new Date().toLocaleString()
    },
  },
}
</script>
