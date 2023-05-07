<template>
  <div class="container">
    <h1>Modification de carte</h1>
    <InputComponent
      icon="ShuffleIcon"
      name="name"
      label="Nom"
      placeholder="Entrez le nom de votre carte"
    />
    <InputComponent
      icon="ShuffleIcon"
      name="surname"
      label="Surnom"
      placeholder="Entrez le surnom de votre carte"
    />
    <InputComponent
      name="image"
      label="Image"
      type="file"
    />
    <ListComponent
      name="type"
      label="Type"
      placeholder="Choisissez le type de votre carte"
      :list="typeArray"
    />
    <ListComponent
      name="classe"
      label="Classe"
      placeholder="Choisissez la classe de votre carte"
      :list="classArray"
    />
    <InputComponent
      name="power"
      label="Puissance"
      placeholder="Entrez la puissance de votre carte"
      type="number"
    />
    <ActiveAbilitiesComponent
      label="Capacité(s) active(s)"
    />
    <PassiveAbilityComponent
      label="Capacité passive"
    />

    <button class="button">
      Sauvegarder les changements
    </button>
  </div>
</template>

<script>
  import ActiveAbilitiesComponent from '../components/ActiveAbilitiesComponent.vue'
  import PassiveAbilityComponent from '../components/PassiveAbilityComponent.vue';

  export default {
    data() {
      return {
        typeArray: [
          {
            value: 'chaos',
            title: 'Chaos',
          },
          {
            value: 'halo',
            title: 'Halo',
          },
        ],
        classArray: [
          {
            value: 'mage',
            title: 'Mage',
          },
          {
            value: 'soigneur',
            title: 'Soigneur',
          },
          {
            value: 'guerrier',
            title: 'Guerrier',
          },
          {
            value: 'archer',
            title: 'Archer',
          },
          {
            value: 'assassin',
            title: 'Assassin',
          },
        ],
      }
    },
    components: {
      ActiveAbilitiesComponent,
      PassiveAbilityComponent,
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