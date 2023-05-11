<template>
  <div class="tooltip">
    <span class="tooltip-content">
      <slot name="content"></slot>
    </span>
    <slot name="icon"></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .tooltip {
    display: flex;
    position: relative;

    &:hover {
      .tooltip-content {
        opacity: 1;
        transform: translate(-50%, -100%);
      }
    }

    &-content {
      position: absolute;
      pointer-events: none;
      z-index: 3;
      top: -10px;
      left: 50%;
      background-color: var(--electric-crimson);
      color: #FFF;
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 10px;
      transform: translate(-50%, -80%);
      opacity: 0;
      transition: 0.3s;

      &::after {
        content: "";
        height: 15px;
        width: 15px;
        background-color: var(--electric-crimson);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 20%) rotate(45deg);
        z-index: -5;
      }
    }
  }
</style>