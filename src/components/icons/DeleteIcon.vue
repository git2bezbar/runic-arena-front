<template>
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9412 4H16.4412L15.4412 3H10.4412L9.44116 4H5.94116V6H19.9412M6.94116 19C6.94116 19.5304 7.15188 20.0391 7.52695 20.4142C7.90202 20.7893 8.41073 21 8.94116 21H16.9412C17.4716 21 17.9803 20.7893 18.3554 20.4142C18.7304 20.0391 18.9412 19.5304 18.9412 19V7H6.94116V19Z" :fill="'#' + this.color"/>
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