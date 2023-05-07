<template>
  <div class="container">
    <h1>Modification de capacité</h1>
    <InputComponent
      name="name"
      label="Nom"
      placeholder="Entrez le nom de votre carte"
    />
    <ListComponent
      name="type"
      label="Type"
      placeholder="Choisissez le type de capacité (compétence) de votre carte"
      :list="typeArray"
    />
    <InputComponent
      name="desc"
      label="Description"
      placeholder="La description de votre carte dépend du type de capacité"
      disabled
    />
    <InputComponent
      name="quantity"
      label="Quantité"
      placeholder="Entrez la quantité de votre capacité"
      type="number"
    />

    <button class="button">
      Sauvegarder les changements
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        typeArray: [
          {
            value: 'esquive',
            title: 'Esquive',
          },
          {
            value: 'vol-de-vie',
            title: 'Vol de vie',
          },
          {
            value: 'rage',
            title: 'Rage',
          },
          {
            value: 'critique',
            title: 'Critique',
          },
        ],
      }
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