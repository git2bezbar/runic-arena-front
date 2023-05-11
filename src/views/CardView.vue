<template>
  <div class="container">
      <h1>Informations de carte</h1>
      <div class="card">
        <div
          class="card-img"
          :style="'background: center center / cover url(\'../../src/assets/images/0.jpg\')'"
        >
        </div>
        <div class="card-info">
          <header>
            <div class="card-titles">
              <h2>{{ cardData.name }}</h2>
              <p>{{ cardData.surname }}</p>
            </div>
            <div class="card-buttons">
              <a :href="this.$route.path + '/edit'" class="button">
                Modifier
                <EditIcon />
              </a>
              <button :href="this.$route.path + '/delete'" class="button" @click="deleteQuery">
                Supprimer
                <DeleteIcon />
              </button>
            </div>
          </header>
          <div class="card-items">
            <CardItem
              icon="PowerIcon"
              :title="cardData.power"
              unit="Puissance"
            />
            <CardItem
              icon="TypeIcon"
              :title="cardData.typeName"
              unit="Type"
            />
            <CardItem
              icon="ClassIcon"
              :title="cardData.className"
              unit="Classe"
            />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="active">
          <h2>Capacités actives</h2>
          <div class="card-items">

            <CardItem
              v-for="(active, i) in this.cardData.actives"
              :key="i"
              icon="AbilityIcon"
              :title="active.active.ability.name"
              :unit="`${active.active.ability.skill.name} 
              ${active.active.ability.amount} 
              ${active.active.ability.skill.isPercentage ? '%' : ''}`"
            />
          </div>
        </div>
        <div class="passive">
          <h2>Capacité passive</h2>
          <div class="passive-content">
            <div class="passive-info">
              <h3>{{ cardData.passive.condition.name }}</h3>
              <p>{{ cardData.passive.condition.description }}</p>
            </div>
            <CardItem
              isPassive
              icon="AbilityIcon"
              :title="cardData.passive.ability.name"
              :unit="`${cardData.passive.ability.skill.name} 
              ${cardData.passive.ability.amount} 
              ${cardData.passive.ability.skill.isPercentage ? '%' : ''}`"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cardData: '',
      }
    },
    async beforeMount() {
      let data = await fetch('http://localhost:3000/cards/' + this.$route.params.id)
        .then(response => response.json());
      this.cardData = data;
    },
    methods: {
      async deleteQuery() {
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        };
        await fetch(
          'http://localhost:3000/cards/' + this.$route.params.id,
          requestOptions
        ).then(response => {
          return response.json();
        });

        let newURL = location.href.split('/');
        newURL.pop();
        newURL = newURL.join('/');
        document.location = newURL;
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

    h1 {
      font-size: 24px;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 32px;
      background-color: white;
      border-radius: 15px;
      padding: 32px;
      border: 1px solid #0000001a;

      &-img {
        width: 175px;
        height: 175px;
        border-radius: 15px;
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 32px;

        header {
          display: flex;
          flex-direction: column;
          gap: 32px;
          justify-content: space-between;
        }
      }

      &-titles {
        display: flex;
        flex-direction: column;
        gap: 4px;

        h2 {
          font-size: 24px;
          font-weight: bold;
        }

        p {
          font-size: 18px;
          font-weight: bold;
          color: #A0A0A0;
        }
      }

      &-buttons {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 16px;
      }

      &-items {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .button {
        background-color: var(--blue);
        padding: 16px;
        border-radius: 10px;
        color: white;
        text-decoration: none;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 16px;
        font-family: 'Raleway', sans-serif;
        border: none;
        font-size: 16px;
        transition: 0.3s;

        &:hover {
          background-color: darken(#1400FF, 15%);
        }
      }
    }

    .active, .passive {
      display: flex;
      flex-direction: column;
      gap: 16px;

      h2 {
        font-size: 20px;
      }

      &-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h3 {
          font-size: 16px;
        }

        p {
          font-size: 14px;
          max-width: 200px;
        }
      }
    }
  }

  @media screen and (min-width: 860px) {
    .container {
      h1 {
        font-size: 32px;
      }

      .card {
        &-items {
          flex-direction: row;
          gap: 32px;
        }

        &-buttons {
          flex-direction: row;
          gap: 32px;
        }

        &-titles {
          h2 {
            font-size: 32px;
          }
  
          p {
            font-size: 24px;
          }
        }
      }

      .active, .passive {
        &-content {
          gap: 32px;
          flex-direction: row;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .container {
      .card {
        flex-direction: row;

        &-info {
          header {
            gap: 0;
            flex-direction: row;
          }
        }

        &-img {
          width: 250px;
          height: 250px;
        }
      }
    }
  }
</style>