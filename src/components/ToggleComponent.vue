<template>
  <div class="toggle">
    <div class="toggle-label">{{ label }}</div>
    <label :for="name" class="toggle-input">
      <input type="checkbox" :name="name" :id="name">
      <p class="toggle-no">{{ no }}</p>
      <span class="toggle-switch"></span>
      <p class="toggle-yes">{{ yes }}</p>
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
      },
      name: {
        type: String,
      },
      no: {
        type: String,
        default: "Non",
      },
      yes: {
        type: String,
        default: "Oui",
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toggle {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-label {
      font-weight: 800;
    }

    &-input {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &-switch {
      width: 30px;
      height: 18px;
      border-radius: 100px;
      background-color: #1400FF;
      opacity: .25;
      position: relative;
      transition: 0.3s;

      &::before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 100px;
        background-color: #EEEEEE;
        top: 3px;
        left: 3px;
        transition: 0.3s;
      }
    }
    
    input {
      display: none;
      &:checked ~ .toggle-switch {
        opacity: 1;
        
        &::before {
          transform: translate(100%);
        }
      }
    }
  }
</style>