<template>
  <div class="container">
    <h1>Modification de classe</h1>
    <InputComponent
      name="name"
      label="Nom"
      placeholder="Nom de votre classe"
      :value="newType.name"
      @updateInput="setName"
    />
    <TextAreaComponent
      name="desc"
      label="Description"
      placeholder="Description de votre classe"
      :value="newType.desc"
      @updateTextarea="setDesc"
    />

    <button class="button"  :disabled="!hasChanged || isEmpty" @click="updateQuery">
      Sauvegarder les changements
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: {
          name: '',
          desc: '',
        },
        newType: {
          name: '',
          desc: '',
        },
        hasChanged: false,
        isEmpty: false,
      }
    },
    methods:{
      setDesc(val) {
        this.newType.desc = val;
      },
      setName(val) {
        this.newType.name = val;
      },
      async updateQuery() {

        const newTypeObject = {
          name: this.newType.name,
          description: this.newType.desc,
        };
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTypeObject),
        };
        this.hasChanged = false;
        await fetch(
          'http://localhost:3000/classes/' + this.$route.params.id,
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
      let data = await fetch('http://localhost:3000/classes/' + this.$route.params.id)
        .then(response => response.json());
      this.type = { name: data.name, desc : data.description };
      this.newType = { name: data.name, desc : data.description };
    },
    updated() {
      this.hasChanged = 
        (this.newType.name.trim() !== this.type.name.trim() ||
          this.newType.desc.trim() !== this.type.desc.trim());
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