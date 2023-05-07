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
      >
        <option value="" disabled selected>{{placeholder}}</option>
        <option
          v-for="(element, index) in list"
          :key="index"
          :value="element.value"
          :selected="element.value === value"
        >
          {{ element.title }}
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
        type: Array,
      },
      value: {
        type: String,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-label {
      font-weight: 800;
    }

    &-field {
      width: 500px;
      height: 46px;
      padding: 16px;
      border-radius: 10px;
      background-color: white;
      border: 1px solid #0000001A;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

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
</style>