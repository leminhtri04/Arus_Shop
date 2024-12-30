<template>
      <div>
        <header>
          <HeaderClient/>
        </header>
        <router-view/>
        <footer>
        </footer>
      </div>
</template>

<script setup lang="ts">
    import HeaderClient from './HeaderClient.vue';
</script>

<style lang="scss" scoped>

</style>