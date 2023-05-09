<template>
  <div class="container">
    <h1>Modification de compétence</h1>
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

    <button class="button" :disabled="!hasChanged" @click="updateQuery">
      Sauvegarder les changements
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
        skill: {
          name: '',
          desc: '',
          isPercentage: null,
        },
        newSkill: {
          name: '',
          desc: '',
          isPercentage: null,
        },
        hasChanged: false,
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
      async updateQuery() {

        const newSkillObject = {
          name: this.newSkill.name,
          description: this.newSkill.desc,
          isPercentage: this.newSkill.isPercentage,
        };
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newSkillObject),
        };
        this.hasChanged = false;
        await fetch(
          'http://localhost:3000/skills/' + this.$route.params.id,
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
      let data = await fetch('http://localhost:3000/skills/' + this.$route.params.id)
        .then(response => response.json());
      this.skill = { name: data.name, desc : data.description, isPercentage: data.isPercentage };
      this.newSkill = { name: data.name, desc : data.description, isPercentage: data.isPercentage };
    },
    updated() {
      this.hasChanged = 
        (this.newSkill.name.trim() !== this.skill.name.trim() ||
          this.newSkill.desc.trim() !== this.skill.desc.trim() ||
          this.newSkill.isPercentage !== this.skill.isPercentage); 
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