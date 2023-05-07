<template>
  <div class="active">
    <div class="active-title">Capacité {{ number }}</div>
    <div class="active-skill">
      <div class="active-subtitle">Compétences</div>
      <ListComponent
        :list="abilityList"
        placeholder="Choisissez une capacité"
        name="abilities"
      />
    </div>
    <div class="active-amount">
      <div class="active-subtitle">Coût</div>
      <AmountComponent 
        v-for="(amount, index) in amounts"
        :key="index"
        :amount="amount"
        :list="colorList"
        @delete="removeAmount"
      />
      <button v-show="amounts < 2" class="button" @click="addAmount">
        Ajouter un coût
      </button>
      <button class="button" @click="deleteAbility">
        Supprimer la capacité
      </button>
    </div>
  </div>
</template>

<script>
  import AmountComponent from './AmountComponent.vue';
  export default {
    props: {
      number: {
        type: Number,
      }
    },
    data() {
      return {
        abilityList: [
          {
            value: 'camouflage',
            title: 'Camouflage',
          },
          {
            value: 'concentration',
            title: 'Concentration',
          },
        ],
        colorList: [
          {
            value: 'rouge',
            title: 'Rouge',
          },
          {
            value: 'bleu',
            title: 'Bleu',
          },
          {
            value: 'jaune',
            title: 'Jaune',
          },
        ],
        amounts: 0,
        unmount: false,
      }
    },
    methods: {
      addAmount() {
        this.amounts++;
      },
      removeAmount() {
        this.amounts--;
      },
      deleteAbility() {
        this.$emit("delete")
      }
    },
    components: {
      AmountComponent
    },
    updated() {
      console.log(this.amounts);
    }
  }
</script>

<style lang="scss">
  .active {
    background-color: #D8D4FF;
    border: 1px solid #1400FF1A;
    border-radius: 15px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    width: min-content;

    &-title {
      font-weight: 800;
      font-size: 14px;
    }

    &-subtitle {
      font-weight: 800;
      font-size: 12px;
    }

    &-amount {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px
      ;
      &-item {
        display: flex;
        align-items: flex-end;
        gap: 16px;

        .no-width {
          gap: 0px;

          .input-field, .list-field {
            width: 205px;
          }
        }

        button {
          background-color: var(--blue);
          padding: 12px;
          border-radius: 10px;
          color: white;
          text-decoration: none;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 16px;
          border: none;
          transition: 0.3s;

          &:hover {
            background-color: darken(#1400FF, 15%);
          }
        }
      }
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
</style>