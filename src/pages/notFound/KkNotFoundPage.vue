<template>
  <div class="tw-hero tw-min-h-screen tw-bg-base-300">
    <div class="tw-rounded-md tw-bg-white tw-px-40 tw-py-20 tw-shadow-xl">
      <div class="tw-flex tw-flex-col tw-items-center">
        <h1 class="tw-text-9xl tw-font-bold tw-text-blue-600">404</h1>

        <h6
          class="tw-mb-2 tw-text-center tw-text-2xl tw-font-bold tw-text-gray-800 md:tw-text-3xl"
        >
          <span class="tw-text-red-500">Oops!</span> Page not found
        </h6>

        <p class="tw-mb-8 tw-text-center tw-text-gray-500 md:tw-text-lg">
          The page you’re looking for doesn’t exist.
        </p>

        <a
          href="/"
          class="tw-bg-blue-100 tw-px-6 tw-py-2 tw-text-sm tw-font-semibold tw-text-blue-800"
          >Go home</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KkNotFoundPage',
}
</script>
