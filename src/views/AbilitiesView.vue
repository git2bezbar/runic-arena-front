<template>
  <div class="container">
    <h1>Les capacités</h1>
    <p>C’est ici que vous pouvez ajouter, modifier ou supprimer des capacités.</p>
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
        arrayHead: ['Nom', 'Type', 'Quantité'],
        arrayBody: [
          ['Camouflage', 'Esquive', '2'],
          ['Bouclier', 'Protection', '100'],
          ['Concentration', 'Critique', '3'],
          ['Colère des Dieux', 'Rage', '100'],
          ['Châtiment', 'Malédiction', '1'],
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