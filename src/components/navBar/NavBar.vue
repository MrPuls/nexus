<script setup>
import ThemeController from "../themeController/ThemeController.vue";
import BurgerMenu from "./components/BurgerMenu.vue";
import NavBarProfile from "./components/NavBarProfile.vue";
import NavBarSearch from "./components/NavBarSearch.vue";
import NavBarTitle from "./components/NavBarTitle.vue";
</script>

<template>
  <div class="navbar bg-base-100 flex-row">
    <BurgerMenu />
    <NavBarTitle />
    <NavBarSearch />
    <ThemeController />
    <NavBarProfile />
  </div>
</template>