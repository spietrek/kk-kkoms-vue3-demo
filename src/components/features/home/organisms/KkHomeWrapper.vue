<template>
  <div class="dcb-wrapper">
    <img :src="filePath" alt="logo" class="tw-mr-4 tw-object-cover" />

    <button class="tw-btn tw-btn-primary" @click="addCard">Add Card</button>
    <div class="tw--m-4 tw-flex tw-flex-wrap">
      <template v-for="card in cards" :key="card.title">
        <span class="tw-p-4 md:tw-w-1/2 xl:tw-w-1/4">
          <KkImageCard
            :title="getCardTitle(card)"
            :link="card.link"
            :image-url="card.imageUrl"
          ></KkImageCard>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import KkImageCard from '@/components/molecules/KkImageCard.vue'

export default {
  name: 'KkHomeWrapper',

  components: {
    KkImageCard,
  },

  methods: {
    getCardTitle(card) {
      const { title } = card
      return title?.toUpperCase() || ''
    },
  },

  inject: {
    filePath: {
      from: 'filePath',
      default: '',
    },
    cards: {
      from: 'cards',
      default: () => [],
    },
    addCard: {
      from: 'addCard',
      default: () => () => {},
    },
  },
}
</script>

<style lang="less"></style>
