<template>
  <div class="container">
    <h1>Informations de compétence</h1>
    <div class="card">
      <SkillIcon class="card-icon" />
      <div class="card-info">
        <header>
          <div class="card-titles">
            <h2>La compétence</h2>
            <p>en détails</p>
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
            icon="TitleIcon"
            title="Nom"
            unit="Esquive"
          />
          <CardItem
            icon="DescIcon"
            title="Description"
            unit="Esquive les X prochaines attaques"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SkillIcon from '../components/icons/SkillIcon.vue';
  export default {
    components: {
      SkillIcon,
    }
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
      gap: 32px;
      background-color: white;
      border-radius: 15px;
      padding: 32px;
      border: 1px solid #0000001a;
      width: 850px;

      &-img {
        width: 250px;
        height: 250px;
        border-radius: 15px;
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 100%;

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
        transition: 0.3s;

        &:hover {
          background-color: darken(#1400FF, 15%);
        }
      }
    }
  }
</style>