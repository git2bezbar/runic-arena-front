<template>
  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.9412 28.4667L15.0079 26.7067C8.14124 20.48 3.60791 16.36 3.60791 11.3333C3.60791 7.21333 6.83458 4 10.9412 4C13.2612 4 15.4879 5.08 16.9412 6.77333C18.3946 5.08 20.6212 4 22.9412 4C27.0479 4 30.2746 7.21333 30.2746 11.3333C30.2746 16.36 25.7412 20.48 18.8746 26.7067L16.9412 28.4667Z"
      :fill="'#' + this.color"
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