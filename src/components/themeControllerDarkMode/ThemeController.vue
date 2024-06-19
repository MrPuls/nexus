<script setup>

</script>

<template>
  <div class="dropdown dropdown-hover dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="btn m-1"
    >
      Theme
    </div>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Light"
          value="light"
        >
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Dark"
          value="dark"
        >
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Dracula"
          value="dracula"
        >
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Nord"
          value="nord"
        >
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Pastel"
          value="pastel"
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>