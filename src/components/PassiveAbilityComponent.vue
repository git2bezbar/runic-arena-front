<template>
  <div class="passive">
    <div class="passive-label">{{this.label}}</div>
    <div class="passive-ability">
      <div class="passive-condition">
        <div class="passive-subtitle">Condition</div>
        <ListComponent
          :list="conditionList"
          placeholder="Choisissez une condition"
          name="abilities"
        />
      </div>
      <div class="passive-ability-container">
        <div class="passive-subtitle">Compétence</div>
        <ListComponent
          :list="abilityList"
          placeholder="Choisissez une capacité"
          name="abilities"
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
      }
    },
    data() {
      return {
        conditionList: [
          {
            value: 'attaque',
            title: 'Attaque',
          },
          {
            value: 'defend',
            title: 'Défend',
          },
          {
            value: 'avantage',
            title: 'Avantage',
          },
          {
            value: 'groupe',
            title: 'Groupe',
          },
        ],
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .passive {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;

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
      width: min-content;
    }

    &-subtitle {
      font-weight: 800;
      font-size: 14px;
    }
  }
</style>