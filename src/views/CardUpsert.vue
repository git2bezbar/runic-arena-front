<template>
  <div class="container">
    <h1>Modification de carte</h1>
    <button class="button" @click="generateName">Générer un nom</button>
    <InputComponent
      icon="ShuffleIcon"
      name="name"
      label="Nom"
      placeholder="Nom de votre carte"
      :value="cardData.name"
      @updateInput="setName"
    />
    <InputComponent
      icon="ShuffleIcon"
      name="surname"
      label="Surnom"
      placeholder="Surnom de votre carte"
      :value="cardData.surname"
      @updateInput="setSurname"
    />
    <form method="post" enctype="multipart/form-data">
      <InputComponent
      name="image"
      label="Image"
      type="file"
      @updateInput="setImage"
      />
    </form>
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
    <ActiveAbilitiesComponent
      label="Capacité(s) active(s)"
      :actives="cardData.actives"
    />
    <PassiveAbilityComponent
      label="Capacité passive"
      :selectedAbility="cardData.passive.abilityId"
      :selectedCondition="cardData.passive.conditionId"
      @updateSelectedCondition="setSelectedCondition"
      @updateSelectedAbility="setSelectedAbility"
    />

    <button class="button" @click="updateQuery">
      Sauvegarder les changements
    </button>
  </div>
</template>

<script>
  import ActiveAbilitiesComponent from '../components/ActiveAbilitiesComponent.vue'
  import PassiveAbilityComponent from '../components/PassiveAbilityComponent.vue';

  export default {
    data() {
      return {
        typeArray: '',
        classArray: '',
        cardData: '',
        isEmpty: false,
        isSame: true,
      }
    },
    components: {
      ActiveAbilitiesComponent,
      PassiveAbilityComponent,
    },
    async beforeMount() {
      let data = await fetch('http://localhost:3000/cards/' + this.$route.params.id)
        .then(response => response.json());
      this.cardData = data;

      let types = await fetch('http://localhost:3000/types')
        .then(response => response.json());
      this.typeArray = types;

      let classes = await fetch('http://localhost:3000/classes')
        .then(response => response.json());
      this.classArray = classes;
    },
    methods: {
      async updateQuery() {
        const cardDataObject = {
          name: this.cardData.name,
          surname: this.cardData.surname,
          typeId: this.cardData.typeId,
          classId: this.cardData.classId,
          power: this.cardData.power,
        };
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cardDataObject),
        };
        this.isEmpty = false;
        await fetch(
          'http://localhost:3000/cards/' + this.$route.params.id,
          requestOptions
        );

        let newURL = location.href.split('/');
        newURL.pop();
        newURL = newURL.join('/');
        document.location = newURL;
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
      setSelectedCondition(val) {
        this.cardData.passive.conditionId = val;
      },
      setSelectedAbility(val) {
        this.cardData.passive.abilityId = val;
      },
      setSelectedActiveAbility(val) {
        this.cardData.passive.abilityId = val;
      },
      async setImage(val) {
        console.log(val);
        let formData = new FormData();
        formData.append('image', val);
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: formData,
        };
        await fetch(
          'http://localhost:3000/cards/' + this.$route.params.id + '/upload',
          requestOptions
        ).then(response => {
          console.log(response);         
          return response;
        });
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