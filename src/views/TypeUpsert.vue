<template>
  <div class="container">
    <h1>Modification de type</h1>
    <InputComponent
      name="name"
      label="Nom"
      placeholder="Le nom de votre type"
    />
    <TextAreaComponent
      name="desc"
      label="Description"
      placeholder="La description de votre type"
    />

    <button class="button">
      Sauvegarder les changements
    </button>
  </div>
</template>

<script>
  import TextAreaComponent from '../components/TextAreaComponent.vue';
  export default {
    components: {
      TextAreaComponent,
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    .button {
      background-color: var(--blue);
      font-family: 'Raleway', sans-serif;
      font-size: 14px;
      padding: 16px;
      border-radius: 10px;
      border: none;
      color: white;
      text-decoration: none;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 16px;
      transition: 0.3s;

      &:hover {
        background-color: darken(#1400FF, 15%);
      }
    }
  }
</style>