<template>
  <div id="app">
    <KkShellWrapper>
      <RouterView />
    </KkShellWrapper>
  </div>
</template>

<script>
// import { RouterView } from 'vue-router'
import KkShellWrapper from '@/components/organisms/KkShellWrapper.vue'

export default {
  components: {
    KkShellWrapper,
  },
}
</script>
