<template>
  <nav class="navbar">
    <div class="my-2">
      <h1>
        <nuxt-link to="/">Campus School Techfolio</nuxt-link>
      </h1>
    </div>
    
    <div class="my-2">
      <NavbarMenuItems />
    </div>
  </nav>
</template>

<style lang="postcss">
.navbar {
  @apply flex flex-col text-center sm:flex-row sm:text-left sm:justify-between bg-white shadow sm:items-baseline w-full bg-indigo-700;
}

.navbar a, .navbar button {
  color:rgb(240, 240, 240);
  font-family: "Audiowide";
  text-shadow: 0 0 0px #fff, 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6;
  transition-property: text-shadow;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-duration: .5s;
}

.navbar a:hover, .navbar button:hover {
  text-shadow: 0 0 10px #fff, 0 0 15px #ff4da6, 0 0 20px #ff4da6, 0 0 25px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6, 0 0 40px #ff4da6;
  transition-property: text-shadow;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-duration: .5s;
}
</style>