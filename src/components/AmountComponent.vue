<template>
  <div class="active-amount-item" v-show="!unmount">
    <InputComponent
      class="no-width"
      type="number"
      placeholder="Choisissez un coût"
    />
    <ListComponent
      class="no-width"
      :list="list"
      placeholder="Choisissez une couleur"
      name="colors"
    />
    <button @click="deleteAmount">
      <DeleteIcon/>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
      }
    },
    data() {
      return {
        unmount: false,
      }
    },
    methods: {
      deleteAmount() {
        this.$emit('delete')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>