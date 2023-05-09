<template>
  <div class="input">
    <div class="input-label">{{label}}</div>
    <textarea
      :id="name"
      :name="name"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
      v-model="inputVal"
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
      value: {
        type: String,
        default: ''
      },
    },
    computed: {
      inputVal: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('updateTextarea', val);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    &-label {
      font-weight: 800;
    }

    textarea {
      font-family: 'Raleway', sans-serif;
      resize: none;
      width: 100%;
      padding: 16px;
      border-radius: 10px;
      background-color: white;
      border: 1px solid #0000001A;

      &:focus{
        outline: none;
      }
    }
  }

  @media screen and (min-width: 860px) {
    .input {
      textarea {
        width: 500px;
      }
    }
  }
</style>