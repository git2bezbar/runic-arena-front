<template>
  <div class="container">
    <h1>Ajout de type</h1>
    <InputComponent
      name="name"
      label="Nom"
      placeholder="Le nom de votre type"
      :value="newType.name"
      @updateInput="setName"
    />
    <TextAreaComponent
      name="desc"
      label="Description"
      placeholder="La description de votre type"
      :value="newType.desc"
      @updateTextarea="setDesc"
    />

    <button class="button" :disabled="isEmpty" @click="addQuery">
      Ajouter le type
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newType: {
          name: '',
          desc: '',
        },
        isEmpty: true,
      }
    },
    methods:{
      setDesc(val) {
        this.newType.desc = val;
      },
      setName(val) {
        this.newType.name = val;
      },
      async addQuery() {

        const newTypeObject = {
          name: this.newType.name,
          description: this.newType.desc,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTypeObject),
        };
        this.isEmpty = false;
        await fetch(
          'http://localhost:3000/types/',
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
      this.isEmpty = !this.newType.name.trim().length; 
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