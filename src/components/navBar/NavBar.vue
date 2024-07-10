<script setup lang="ts">
import ThemeController from "../themeController/ThemeController.vue";
import NavBarBurgerMenu from "./components/NavBarBurgerMenu.vue";
import NavBarProfile from "./components/NavBarProfile.vue";
import NavBarSearch from "./components/NavBarSearch.vue";
import NavBarTitle from "./components/NavBarTitle.vue";
</script>

<template>
  <div class="navbar bg-base-100 flex-row">
    <NavBarBurgerMenu />
    <NavBarTitle />
    <NavBarSearch />
    <ThemeController />
    <NavBarProfile />
  </div>
</template>
