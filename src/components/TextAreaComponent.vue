<template>
  <div class="input">
    <div class="input-label">{{label}}</div>
    <textarea
      :id="name"
      :name="name"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
      },
      label: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      rows: {
        type: String,
        default: "5",
      },
      cols: {
        type: String,
        default: "32",
      },
    },
  }
</script>

<style lang="scss" scoped>
  .input {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-label {
      font-weight: 800;
    }

    textarea {
      font-family: 'Raleway', sans-serif;
      resize: none;
      width: 500px;
      padding: 16px;
      border-radius: 10px;
      background-color: white;
      border: 1px solid #0000001A;

      &:focus{
        outline: none;
      }
    }
  }
</style>