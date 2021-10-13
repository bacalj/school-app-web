<template>
  <div class="main">
    <Navbar class="px-6" />
    <!-- <pre>
      {{ $store.state }}
    </pre> -->
    <Nuxt class="px-6 pt-6" />
    <!-- <Footer class="px-6" /> -->
  </div>
</template>

<style lang="postcss">

body {
  @apply bg-gray-100
}

h1 {
  font-family: 'Audiowide';
  @apply text-lg;
}

p, a, li, span {
  color: #2e2e4e
}
</style>
