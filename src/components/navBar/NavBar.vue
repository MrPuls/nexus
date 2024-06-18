<script setup>
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu.vue";
import ThemeController from "../themeControllerDarkMode/ThemeController.vue";
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-none">
    <HamburgerMenu></HamburgerMenu>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Test Nexus</a>
    </div>
    <div class="flex-none">
      <ThemeController></ThemeController>
    </div>
  </div>
</template>