<template>
  <nav class="navbar">
    <div class="my-2">
      Campus School Techfolio
    </div>
    
    <div class="my-2">
      <NavbarMenuItems />
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.navbar {
  @apply flex flex-col text-center sm:flex-row sm:text-left sm:justify-between bg-white shadow sm:items-baseline w-full;
}
</style>