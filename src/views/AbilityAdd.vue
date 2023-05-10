<template>
  <div class="container">
    <h1>Ajout de capacité</h1>
    <InputComponent
      name="name"
      label="Nom"
      placeholder="Nom de votre carte"
      :value="newAbility.name"
      @updateInput="setName"
    />
    <ListComponent
      name="type"
      label="Type"
      placeholder="Type de votre carte"
      :list="skillList"
      value="placeholder"
      @updateList="setSkillId"
    />
    <TextAreaComponent
      name="desc"
      label="Description"
      placeholder="Description de votre carte"
      disabled
      :value="skillDesc"
    />
    <InputComponent
      name="amount"
      label="Quantité"
      placeholder="Quantité de votre capacité"
      type="number"
      :value="newAbility.amount"
      @updateInput="setAmount"
    />

    <button class="button" :disabled="isEmpty" @click="addQuery">
      Ajouter la capacité
    </button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        skillList: {},
        newAbility: {
          name: '',
          amount: null,
          skillId: null,
        },
        skillDesc: '',
        isEmpty: true,
      }
    },
    methods:{
      setName(val) {
        this.newAbility.name = val;
      },
      setAmount(val) {
        this.newAbility.amount = val;
      },
      setSkillId(val) {
        this.newAbility.skillId = val;
        const indexOfSkill = this.skillList.findIndex(skill => skill.id === this.newAbility.skillId);
        this.skillDesc = this.skillList[indexOfSkill]?.description;
      },
      async addQuery() {
        const newAbilityObject = {
          name: this.newAbility.name,
          amount: this.newAbility.amount,
          skillId: this.newAbility.skillId,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newAbilityObject),
        };
        this.isEmpty = false;
        await fetch(
          'http://localhost:3000/abilities/',
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
    async beforeMount() {
      await fetch('http://localhost:3000/skills')
        .then(response => response.json())
        .then((json) => {
          this.skillList = [...json];
        });
    },
    updated() {
      this.isEmpty = !this.newAbility.name.trim().length ||
        !this.newAbility.amount || !this.newAbility.skillId;
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

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
</style>