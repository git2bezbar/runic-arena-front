<template>
  <div class="container">
    <h1>Les compétences</h1>
    <p>C’est ici que vous pouvez ajouter, modifier ou supprimer des compétences.</p>
    <a :href="this.$route.path + '/add'" class="button">
      Ajouter une compétence
    </a>
    <TableComponent
      :head="arrayHead"
      :body="arrayBody"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arrayHead: [{ title: 'Type', prop: 'name' }],
        arrayBody: {}
      }
    },
    async beforeMount() {
      let data = await fetch('http://localhost:3000/skills')
        .then(response => response.json());
      this.arrayBody = [...data];
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;

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