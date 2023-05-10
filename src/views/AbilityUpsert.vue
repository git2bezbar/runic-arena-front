<template>
  <div class="container">
    <h1>Modification de capacité</h1>
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
      placeholder="Type de capacité de votre carte"
      :list="skillList"
      :value="skill.id"
      @updateList="setSkillId"
    />
    <TextAreaComponent
      name="desc"
      label="Description"
      placeholder="Description de votre carte"
      disabled
      :value="skill.description"
    />
    <InputComponent
      name="quantity"
      label="Quantité"
      placeholder="Quantité de votre capacité"
      type="number"
      :value="newAbility.amount"
      @updateInput="setAmount"
    />

    <button class="button" :disabled="isEmpty || isSame" @click="updateQuery">
      Sauvegarder les changements
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
          amount: '',
          skillId: null,
        },
        ability: {
          name: '',
          amount: '',
          skillId: null,
        },
        skill: {
          type: String,
        },
        isEmpty: false,
        isSame: true,
      }
    },
    methods: {
      setName(val) {
        this.newAbility.name = val;
        this.isSame = false;
      },
      setAmount(val) {
        this.newAbility.amount = val;
        this.isSame = false;
      },
      setSkillId(val) {
        this.newAbility.skillId = val;
        this.isSame = false;
        const indexOfSkill = this.skillList.findIndex(skill => skill.id === this.newAbility.skillId);
        this.skill = this.skillList[indexOfSkill];
      },
      async updateQuery() {
        const newAbilityObject = {
          name: this.newAbility.name,
          amount: this.newAbility.amount,
          skillId: this.newAbility.skillId,
        };
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newAbilityObject),
        };
        this.isEmpty = false;
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
      },
    },
    async beforeMount() {
        await fetch('http://localhost:3000/abilities/' + this.$route.params.id)
        .then(response => response.json())
        .then(async json => {
          this.ability.name = json.name;
          this.ability.amount = json.amount;
          this.ability.skillId = json.skillId;

          this.newAbility.name = json.name;
          this.newAbility.amount = json.amount;
          this.newAbility.skillId = json.skillId;

      });

      await fetch('http://localhost:3000/skills/')
        .then(response => response.json())
        .then(json => {
          this.skillList = [...json];
          const indexOfSkill = this.skillList.findIndex(skill => skill.id === this.newAbility.skillId);
          this.skill = this.skillList[indexOfSkill];
        });
      },
      updated() {
        this.isEmpty = !this.newAbility.name.trim().length && 
          !!this.newAbility.amount && !!this.newAbility.skillId;
        this.isSame = this.newAbility.name.trim() === this.ability.name.trim() &&
          this.newAbility.amount === this.ability.amount &&
          this.newAbility.skillId === this.ability.skillId;
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