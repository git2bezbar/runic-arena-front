<template>
  <div class="container">
    <h1>Ajout de carte</h1>
    <button class="button" @click="generateName">Générer un nom</button>
    <InputComponent
      name="name"
      label="Nom"
      placeholder="Nom de votre carte"
      :value="cardData.name"
      @updateInput="setName"
    />
    <InputComponent
      name="surname"
      label="Surnom"
      placeholder="Surnom de votre carte"
      :value="cardData.surname"
      @updateInput="setSurname"
    />
    <InputComponent
      name="image"
      label="Image"
      type="file"
    />
    <ListComponent
      name="type"
      label="Type"
      placeholder="Type de votre carte"
      :list="typeArray"
      :value="cardData.typeId"
      @updateList="setTypeId"
    />
    <ListComponent
      name="classe"
      label="Classe"
      placeholder="Classe de votre carte"
      :list="classArray"
      :value="cardData.classId"
      @updateList="setClassId"
    />
    <InputComponent
      name="power"
      label="Puissance"
      placeholder="Puissance de votre carte"
      type="number"
      :value="cardData.power"
      @updateInput="setPower"
    />

    <button class="button" @click="addQuery">
      Sauvegarder les changements
    </button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        typeArray: '',
        classArray: '',
        cardData: {
          name: '',
          surname: '',
          typeId: 'placeholder',
          classId: 'placeholder',
          power: '',
        },
        isEmpty: false,
        isSame: true,
      }
    },
    async beforeMount() {
      let types = await fetch('http://localhost:3000/types')
        .then(response => response.json());
      this.typeArray = types;

      let classes = await fetch('http://localhost:3000/classes')
        .then(response => response.json());
      this.classArray = classes;
    },
    methods: {
      async addQuery() {
        const cardDataObject = {
          name: this.cardData.name,
          surname: this.cardData.surname,
          typeId: this.cardData.typeId,
          classId: this.cardData.classId,
          power: this.cardData.power,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cardDataObject),
        };
        this.isEmpty = false;
        await fetch(
          'http://localhost:3000/cards',
          requestOptions
        ).then(response => {
          console.log(cardDataObject);
          return response.json();
        });
      },
      async generateName() {
        let data = await fetch('http://localhost:3000/cards/name-generator')
          .then(response => response.json());
          console.log(data);
        this.cardData.name = data.name;
        this.cardData.surname = data.surname;
      },
      setName(val) {
        this.cardData.name = val;
      },
      setSurname(val) {
        this.cardData.surname = val;
      },
      setTypeId(val) {
        this.cardData.typeId = val;
      },
      setClassId(val) {
        this.cardData.classId = val;
      },
      setPower(val) {
        this.cardData.power = val;
      },
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
    }
  }
</style>