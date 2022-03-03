<template>
  <KkPageWrapper title="Inventory">
    <div class="tw-flex">
      <div class="tw-mt-8 tw-w-4/12">
        <div class="tw-card tw-card-bordered tw-bg-indigo-500">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="tw-card-body">
            <h2 class="tw-card-title tw-text-white">
              Top image
              <div class="tw-badge tw-badge-secondary tw-mx-2">NEW</div>
            </h2>
            <p class="tw-text-white">
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="tw-card-actions tw-justify-end">
              <button class="tw-btn tw-btn-secondary">More info</button>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-mt-8 tw-w-4/12 tw-px-4">
        <div class="tw-card tw-image-full tw-h-full tw-shadow-xl">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="tw-card-body tw-justify-end">
            <h2 class="tw-card-title">Image overlay</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="tw-card-actions">
              <button class="tw-btn tw-btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-mt-8 tw-w-4/12">
        <div class="tw-card tw-bg-accent tw-text-accent-content tw-shadow-sm">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div class="tw-card-body">
            <h2 class="tw-card-title">Accent color</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="tw-card-actions">
              <button class="tw-btn tw-btn-secondary">More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </KkPageWrapper>
</template>

<script>
import KkPageWrapper from '@/components/organisms/KkPageWrapper.vue'

export default {
  name: 'KkInventoryPage',

  components: {
    KkPageWrapper,
  },
}
</script>
