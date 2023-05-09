<template>
  <div class="container">
    <h1>Ajout de classe</h1>
    <InputComponent
      name="name"
      label="Nom"
      placeholder="Nom de votre classe"
      :value="newClass.name"
      @updateInput="setName"
    />
    <TextAreaComponent
      name="desc"
      label="Description"
      placeholder="Description de votre classe"
      :value="newClass.desc"
      @updateTextarea="setDesc"
    />

    <button class="button" :disabled="!isEmpty" @click="addQuery">
      Ajouter la classe
    </button>
  </div>
</template>

<script>
  import TextAreaComponent from '../components/TextAreaComponent.vue';
  export default {
    components: {
      TextAreaComponent,
    },
    data() {
      return {
        newClass: {
          name: '',
          desc: '',
        },
        isEmpty: false,
      }
    },
    methods:{
      setDesc(val) {
        this.newClass.desc = val;
      },
      setName(val) {
        this.newClass.name = val;
      },
      async addQuery() {

        const newClassObject = {
          name: this.newClass.name,
          description: this.newClass.desc,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newClassObject),
        };
        this.isEmpty = false;
        await fetch(
          'http://localhost:3000/classes/',
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
      this.isEmpty = this.newClass.name.trim().length; 
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