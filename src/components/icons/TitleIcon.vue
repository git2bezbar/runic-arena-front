<template>
  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.60791 5.3335V9.3335H14.9412V25.3335H18.9412V9.3335H26.2746V5.3335H7.60791Z"
      :fill="'#' + color"
    />
  </svg>    
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: '1400FF',
      }
    }
  }
</script>