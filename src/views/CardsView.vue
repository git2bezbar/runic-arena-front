<template>
  <div class="container">
    <h1>Les cartes</h1>
    <p>C’est ici que vous pouvez ajouter, modifier ou supprimer des cartes.</p>
    <div class="cards-container">
      <CardComponent
        v-for="(card, index) in cardData"
        :key="index"
        :id="0"
        :power="card.power"
        :type="card.type"
        :class="card.class"
        :name="card.name"
        :surname="card.surname"
        :active="card.active"
        :passive="card.passive"
      />
    </div>
  </div>
</template>

<script>

  import CardComponent from '../components/CardComponent.vue';
  export default {
    components: {
      CardComponent,
    },
    data() {
      return {
        cardData: [
          {
            power: 97,
            type: 'chaos',
            class: 'warrior',
            name: 'Farès',
            surname: 'Le Banni',
            active: 2,
            passive: 1,
          },
          {
            power: 17,
            type: 'chaos',
            class: 'warrior',
            name: 'Farès',
            surname: 'Le Chien',
            active: 0,
            passive: 1,
          },
          {
            power: 57,
            type: 'chaos',
            class: 'warrior',
            name: 'Léonard',
            surname: 'Le Latéral',
            active: 1,
            passive: 1,
          },
          {
            power: 0,
            type: 'chaos',
            class: 'warrior',
            name: 'Béatrice',
            surname: 'La Grosse Pute',
            active: 0,
            passive: 1,
          },
          {
            power: 99,
            type: 'chaos',
            class: 'warrior',
            name: 'Julien',
            surname: 'Le Dev JS',
            active: 2,
            passive: 1,
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h1, p {
      margin: 0;
    }

    .cards-container {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: 675px) {
    .container {
      .cards-container {
        gap: 48px;
      }
    }
  }
</style>