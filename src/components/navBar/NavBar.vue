<script setup>
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu.vue";
import ThemeController from "../themeController/ThemeController.vue";
import NavBarMenu from "./navBarMenu/NavbarMenu.vue";
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-none">
      <HamburgerMenu />
    </div>
    <div class="flex-auto">
      <a class="btn btn-ghost no-animation text-xl">Test Nexus</a>
    </div>
    <div class="flex-auto">
      <NavBarMenu />
    </div>
    <div class="flex-none">
      <ThemeController />
    </div>
  </div>
</template>