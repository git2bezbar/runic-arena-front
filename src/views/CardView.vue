<script>

  export default {
  }
</script>

<template>
  <div class="container">
      <h1>Informations de carte</h1>
      <div class="card">
        <div class="card-img" :style="'background: center center / cover url(\'../../src/assets/images/' + this.$route.params.id + '.jpg\')'"></div>
        <div class="card-info">
          <header>
            <div class="card-titles">
              <h2>Farès</h2>
              <p>Le Banni</p>
            </div>
            <div class="card-buttons">
              <a :href="this.$route.path + '/edit'" class="button">
                Modifier
                <EditIcon />
              </a>
              <a :href="this.$route.path + '/delete'" class="button">
                Supprimer
                <DeleteIcon />
              </a>
            </div>
          </header>
          <div class="card-items">
            <CardItem
              icon="PowerIcon"
              title="75"
              unit="Puissance"
            />
            <CardItem
              icon="ChaosIcon"
              title="Chaos"
              unit="Type"
            />
            <CardItem
              icon="WarriorIcon"
              title="Guerrier"
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
              icon="StopIcon"
              title="2"
              unit="Esquive"
            />
            <CardItem
              icon="HeartIcon"
              title="20%"
              unit="Vol de vie"
            />
          </div>
        </div>
        <div class="passive">
          <h2>Capacité passive</h2>
          <div class="passive-content">
            <div class="passive-info">
              <h3>Attaque</h3>
              <p>Si la carte engage le duel, la compétence est déclenchée.</p>
            </div>
            <CardItem
              isActive
              icon="MadnessIcon"
              title="25%"
              unit="Folie"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    .card {
      display: flex;
      gap: 32px;
      background-color: white;
      border-radius: 15px;
      padding: 32px;
      border: 1px solid #0000001a;

      &-img {
        width: 250px;
        height: 250px;
        border-radius: 15px;
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 32px;

        header {
          display: flex;
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
        align-items: flex-start;
        gap: 32px;
      }

      &-items {
        display: flex;
        gap: 32px;
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
        gap: 32px;
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
</style>