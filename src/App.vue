<script>
  import { RouterView } from 'vue-router';
  import NavbarComponent from './components/NavbarComponent.vue';

  export default {
    components: {
      RouterView, 
      NavbarComponent,
    },
  }
</script>

<template>
  <div class="navbar-container">
    <NavbarComponent/>
  </div>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
  main {
    padding: 32px;
    width: 100%;
  }

  @media screen and (min-width: 675px) {

    .navbar-container {
      background-color: var(--black);
      display: flex;
      position: relative;
    }

    main {
      padding: 64px;
    }
  }
</style>
