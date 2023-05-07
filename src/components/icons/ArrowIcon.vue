<template>
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.44141 9.26316L12.9414 16L19.4414 9.26316L18.2227 8L12.9414 13.4737L7.66016 8L6.44141 9.26316Z"
      :fill="'#' + color"
    />
  </svg>       
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: '000000',
      }
    }
  }
</script>