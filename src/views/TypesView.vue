<template>
  <div class="container">
    <h1>Les types</h1>
    <p>C’est ici que vous pouvez ajouter, modifier ou supprimer des types.</p>
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
          ['Halo'],
          ['Chaos'],
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