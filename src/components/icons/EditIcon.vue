<template>
  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.6512 7.04C22.0412 6.65 22.0412 6 21.6512 5.63L19.3112 3.29C18.9412 2.9 18.2912 2.9 17.9012 3.29L16.0612 5.12L19.8112 8.87M3.94116 17.25V21H7.69116L18.7512 9.93L15.0012 6.18L3.94116 17.25Z" :fill="'#' + this.color"/>
  </svg>    
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'FFFFFF',
      }
    }
  }
</script>