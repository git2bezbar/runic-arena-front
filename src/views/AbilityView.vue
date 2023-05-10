<template>
  <div class="container">
    <h1>Informations de capacité</h1>
    <div class="card">
      <AbilityIcon class="card-icon" />
      <div class="card-info">
        <header>
          <div class="card-titles">
            <h2>{{ ability.name }}</h2>
            <p>en détails</p>
          </div>
          <div class="card-buttons">
            <a :href="this.$route.path + '/edit'" class="button">
              Modifier
              <EditIcon />
            </a>
            <button class="button"  @click="deleteQuery">
              Supprimer
              <DeleteIcon />
            </button>
          </div>
        </header>
        <div class="card-items">
          <CardItem
            icon="SkillIcon"
            :title="skill.name"
            :unit="skill.description"
          />
          <CardItem
            icon="QuantityIcon"
            :title="ability.amount"
            unit="Quantité"
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
        ability: {
          name: '',
          amount: '',
          skillId: null,
        },
        skill: '',
      }
    },
    async beforeMount() {
      await fetch('http://localhost:3000/abilities/' + this.$route.params.id)
        .then(response => response.json())
        .then(async json => {
          this.ability.name = json.name;
          this.ability.amount = json.amount;
          this.ability.skillId = json.skillId;
      });

      await fetch('http://localhost:3000/skills/' + this.ability.skillId)
        .then(response => response.json())
        .then(json => {
          this.skill = json;
        });
    },  
    methods: {
      async deleteQuery() {
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        };
        await fetch(
          'http://localhost:3000/abilities/' + this.$route.params.id,
          requestOptions
        ).then(response => {
          return response.json();
        });

        let newURL = location.href.split('/');
        newURL.pop();
        newURL = newURL.join('/');
        document.location = newURL;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    .card-icon {
      width: 64px;
      height: 64px;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 32px;
      background-color: white;
      border-radius: 15px;
      padding: 32px;
      border: 1px solid #0000001a;

      &-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
        width: 100%;

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
          font-size: 32px;
          font-weight: bold;
        }

        p {
          font-size: 24px;
          font-weight: bold;
          color: #A0A0A0;
        }
      }

      &-buttons {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      &-items {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;

        .card-item {
          width: 100%;
        }
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
  }

  @media screen and (min-width: 860px) {
    .container {
      .card {
        &-buttons {
          flex-direction: row;
          gap: 32px;
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      .card {
        flex-direction: row;
        width: 850px;

        &-info {
          align-items: normal;
          

          header {
            flex-direction: row;
          }
        }

        &-items {
          flex-direction: row;
        }
      }
    }
  }
</style>