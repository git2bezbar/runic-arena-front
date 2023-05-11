<template>
  <div class="passive">
    <div class="passive-label">{{this.label}}</div>
    <div class="passive-ability">
      <div class="passive-condition">
        <div class="passive-subtitle">Condition</div>
        <ListComponent
          :list="conditionsList"
          placeholder="Choisissez une condition"
          name="abilities"
          :value="selectedCondition"
          @updateList="setSelectedCondition"
        />
      </div>
      <div class="passive-ability-container">
        <div class="passive-subtitle">Compétence</div>
        <ListComponent
          :list="abilitiesList"
          placeholder="Choisissez une capacité"
          name="abilities"
          :value="selectedAbility"
          @updateList="setSelectedAbility"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
      },
      selectedCondition: {
        type: String,
      },
      selectedAbility: {
        type: String,
      },
    },
    data() {
      return {
        conditionsList: [],
        abilitiesList: [],
      }
    }, 
    async beforeMount() {
      let conditions = await fetch('http://localhost:3000/conditions')
        .then(response => response.json());
      this.conditionsList = conditions;

      let abilities = await fetch('http://localhost:3000/abilities')
        .then(response => response.json());
      this.abilitiesList = abilities;
    },
    methods: {
      setSelectedCondition(val) {
        this.$emit('updateSelectedCondition', val);
      },
      setSelectedAbility(val) {
        this.$emit('updateSelectedAbility', val);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .passive {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    width: 100%;

    &-label {
      font-weight: 800;
    }

    &-ability {
      background-color: #FFD1DD;
      border: 1px solid #FF00431A;
      border-radius: 15px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 16px;
      width: 100%;
    }

    &-subtitle {
      font-weight: 800;
      font-size: 14px;
    }
  }

  @media screen and (min-width: 860px) {
    .passive {
      width: auto;
      
      &-ability {
        width: min-content;
      }
    }
  }
</style>