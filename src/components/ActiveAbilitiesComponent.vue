<template>
  <div class="actives">
    <div class="actives-label">{{this.label}}</div>
      <ActiveAbilityComponent
        v-for="(ability, index) in abilities"
        :key="index"
        :number="++index"
        @delete="removeAbility"
      />
      <button v-show="abilities < 2" class="button" @click="addAbility">
        Ajouter une capacité
      </button>
  </div>
</template>

<script>
  import ActiveAbilityComponent from './ActiveAbilityComponent.vue';

  export default {
    props: {
      name: {
        type: String,
      },
      label: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      icon: {
        type: String,
      },
      type: {
        type: String,
        default: 'text',
      }
    },
    components: {
      ActiveAbilityComponent,
    },
    data() {
      return {
        abilities: 0,
      }
    },
    methods: {
      addAbility() {
        this.abilities++;
      },
      removeAbility() {
        this.abilities--;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .actives {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    width: 100%;

    &-label {
      font-weight: 800;
    }

    input {
      font-family: 'Raleway', sans-serif;
      width: 100%;
      background-color: transparent;
      border: none;

      &:focus{
        outline: none;
      }
    }

    &-field {
      width: 500px;
      
      &:not(.file) {
        height: 46px;
        padding: 16px;
        border-radius: 10px;
        background-color: white;
        border: 1px solid #0000001A;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &.file {
        display: flex;
        align-items: center;
        gap: 32px;

        input {
          display: flex;
          width: min-content;
        }

        input::file-selector-button {
          font-family: 'Raleway', sans-serif;
          background-color: var(--blue);
          padding: 16px;
          margin-right: 32px;
          border: none;
          border-radius: 10px;
          color: white;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 16px;
          transition: 0.3s;

          &:hover {
            background-color: darken(#1400FF, 15%);
          }
        }
      }
    }

    &-icon {
      width: 24px;
      height: 24px;
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
    }
  }

  @media screen and (min-width: 860px) {
    .actives {
      width: auto;
    }
  }
</style>