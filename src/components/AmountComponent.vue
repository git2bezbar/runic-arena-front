<template>
  <div class="active-amount-item" v-show="!unmount">
    <InputComponent
      class="no-width"
      type="number"
      placeholder="Coût"
    />
    <ListComponent
      class="no-width"
      :list="list"
      placeholder="Couleur"
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

<style lang="scss">
  .active-amount-item {

    .no-width {
      gap: 0px;
      width: 100%;

      .input-field, .list-field {
        width: 100%;
      }
    }

    button {
      background-color: var(--blue);
      padding: 10px;
      border-radius: 10px;
      color: white;
      text-decoration: none;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 16px;
      border: none;
      transition: 0.3s;

      &:hover {
        background-color: darken(#1400FF, 15%);
      }
    }
  }
</style>