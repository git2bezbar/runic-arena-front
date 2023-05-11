<template>
  <div class="container">
    <h1>Les cartes</h1>
    <p>C’est ici que vous pouvez ajouter, modifier ou supprimer des cartes.</p>
    <a :href="this.$route.path + '/add'" class="button">
      Ajouter une carte
    </a>
    <div class="cards-container">
      <CardComponent
        v-for="(card, index) in cardData"
        :key="index"
        :card="card"
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
        cardData: [],
      }
    },
    async beforeMount() {
      let data = await fetch('http://localhost:3000/cards')
        .then(response => response.json());
        console.log(data);
      this.cardData = [...data];
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    h1, p {
      margin: 0;
    }

    .cards-container {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

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

      &:disabled {
        opacity: .5;
      }
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