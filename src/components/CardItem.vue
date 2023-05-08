<template>
  <div class="card-item" :class="this.isActive && 'isActive'">
    <component 
      class="card-item-icon"
      :is="this.icon"
      :color="this.isActive ? 'FF0043' : '1400FF'"
    />
    <div class="card-item-info">
      <h3 class="card-item-title">{{this.title}}</h3>
      <p class="card-item-unit">{{this.unit}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'PowerIcon',
      },
      title: {
        type: [String, Number],
        default: 0,
      },
      unit: {
        type: String,
        default: 'Puissance',
      },
       isActive: {
        type: Boolean,
        default: false,
       }
    }
  }
</script>

<style lang="scss" scoped>
  .card-item {
    width: 200px;
    box-sizing: border-box;
    background-color: #D8D4FF;
    border: 1px solid #1400ff1a;
    border-radius: 15px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    color: var(--blue);

    &.isActive {
      background-color: #FFD1DD;
      border: 1px solid #FF00431a;
      color: var(--electric-crimson);
    }

    &-icon {
      align-self: flex-end;
      width: 32px;
      height: 32px;
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    &-title {
      font-size: 20px;
      font-weight: bold;
    }

    &-unit {
      font-size: 12px;
    }

  }
</style>