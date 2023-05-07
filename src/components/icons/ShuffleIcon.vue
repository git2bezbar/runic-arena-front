<template>
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.9414 3L23.1914 7.5L17.9414 12L23.1914 16.5L17.9414 21V18H15.2014L12.3814 15.18L14.5014 13.06L16.4414 15H17.9414V9H16.4414L7.44141 18H2.94141V15H6.20141L15.2014 6H17.9414V3ZM2.94141 6H7.44141L10.2614 8.82L8.14141 10.94L6.20141 9H2.94141V6Z"
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