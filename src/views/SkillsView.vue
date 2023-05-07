<template>
  <div class="container">
    <h1>Les compétences</h1>
    <p>C’est ici que vous pouvez ajouter, modifier ou supprimer des compétences.</p>
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
        arrayHead: ['Type'],
        arrayBody: [
          ['Esquive'],
          ['Protection'],
          ['Critique'],
          ['Rage'],
          ['Malédiction'],
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
</style>