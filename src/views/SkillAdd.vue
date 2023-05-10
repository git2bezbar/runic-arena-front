<template>
  <div class="container">
    <h1>Ajout de compétence</h1>
    <InputComponent
      name="name"
      label="Nom"
      placeholder="Nom de votre compétence"
      :value="newSkill.name"
      @updateInput="setName"
    />
    <InputComponent
      name="desc"
      label="Description"
      placeholder="Description de votre compétence"
      :value="newSkill.desc"
      @updateInput="setDesc"
    />
    <ToggleComponent
      name="isPercentage"
      label="Est-ce un pourcentage ?"
      :checked="newSkill.isPercentage"
      @updateToggle="setIsPercentage"
    />

    <button class="button" :disabled="isEmpty" @click="addQuery">
      Ajouter la compétence
    </button>
  </div>
</template>

<script>
  import ToggleComponent from '../components/ToggleComponent.vue';
  export default {
    components: {
      ToggleComponent,
    },
    data() {
      return {
        newSkill: {
          name: '',
          desc: '',
          isPercentage: false,
        },
        isEmpty: true,
      }
    },
    methods:{
      setDesc(val) {
        this.newSkill.desc = val;
      },
      setName(val) {
        this.newSkill.name = val;
      },
      setIsPercentage(val) {
        this.newSkill.isPercentage = val;
      },
      async addQuery() {
        const newSkillObject = {
          name: this.newSkill.name,
          description: this.newSkill.desc,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newSkillObject),
        };
        this.isEmpty = false;
        await fetch(
          'http://localhost:3000/skills/',
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
    updated() {
      this.isEmpty = !this.newSkill.name.trim().length; 
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