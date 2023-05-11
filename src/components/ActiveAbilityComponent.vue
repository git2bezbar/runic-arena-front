<template>
  <div class="active">
    <div class="active-title">Capacité {{ number }}</div>
    <div class="active-skill">
      <div class="active-subtitle">Compétences</div>
      <ListComponent
        :list="abilitiesList"
        placeholder="Choisissez une capacité"
        name="abilities"
        :value="selectedAbility"
        @updateList="setSelectedAbility"
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
      <button v-show="amounts < 2" class="button">
        Ajouter un coût
      </button>
      <button class="button">
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
      },
      selectedAbility: {
        type: Number,
      }
    },
    data() {
      return {
        abilitiesList: {},
        colorList: [
          {
            id: 'Rouge',
            name: 'Rouge',
          },
          {
            id: 'Bleu',
            name: 'Bleu',
          },
          {
            id: 'Jaune',
            name: 'Jaune',
          },
        ],
        amounts: 0,
        unmount: false,
      }
    },
    methods: {
      setSelectedAbility(val) {
        this.$emit('updateSelectedAbility', val);
      },
    },
    components: {
      AmountComponent
    },
    
    async beforeMount() {


      let abilities = await fetch('http://localhost:3000/abilities')
        .then(response => response.json());
      this.abilitiesList = abilities;

      let classes = await fetch('http://localhost:3000/classes')
        .then(response => response.json());
      this.classArray = classes;
      
    },
  }
</script>

<style lang="scss" scoped>
  .active {
    background-color: #D8D4FF;
    border: 1px solid #1400FF1A;
    border-radius: 15px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;

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
      gap: 16px;

      &-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        width: 100%;
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

  @media screen and (min-width: 860px) {
    .active {
      width: min-content;

      &-amount {
        &-item {
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }
</style>