<template>
  <div class="list">
    <div class="list-label">{{label}}</div>
    <label
      class="list-field"
      :for="name"
    >
      <select 
        :name="name"
        :id="name"
        v-model="selectVal"
      >
        <option value="placeholder" disabled selected>{{placeholder}}</option>
        <option
          v-for="element in list"
          :key="element.id"
          :value="element.id"
          :selected="element.id === value"
        >
          {{ element.name }}
        </option>
      </select>
      <ArrowIcon class="list-icon"/>
    </label>
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
      list: {
        type: Object,
      },
      value: {
        type: [Number, String],
      }
    },
    computed: {
      selectVal: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('updateList', val);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    &-label {
      font-weight: 800;
    }

    &-field {
      width: 100%;
      height: 46px;
      padding: 16px;
      border-radius: 10px;
      background-color: white;
      border: 1px solid #0000001A;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      text-overflow: ellipsis;

      select {
        width: 100%;
        font-family: 'Raleway', sans-serif;
        outline: none;
        border: none;
        position: relative;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: transparent;
      }
    }

    &-icon {
      position: absolute;
      right: 16px;
      pointer-events: none;
    }
  }

  @media screen and (min-width: 860px) {
    .list {
      width: auto;

      &-field {
        width: 500px;
      }
    }
  }
</style>