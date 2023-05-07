<template>
  <table>
    <thead>
      <tr>
        <th v-for="(el, i) in head" :key="i">{{ el }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(items, index) in body" :key="index" @click="navigate(index)">
        <td v-for="(item, ind) in items" :key="ind">
          {{ item }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      head: {
        type: Array,
      },
      body: {
        type: Array,
      }
    },
    methods: {
      navigate(index) {
        document.location = this.$route.path + '/' + index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  table {
    background-color: white;
    border: 1px solid #0000001A;
    border-radius: 15px;
    border-spacing: 0;
    overflow: hidden;
    max-width: 1024px;

    th, td {
      padding: 16px;
    }
    
    th {
      background-color: #1400FF;
      color: white;
      text-align: left;
      padding-right: 128px;
    }

    tbody {
      tr {
        transition: 0.3s;
        cursor: pointer;
              
        &:hover {
          background-color: #F9F9F9;
        }

        &:not(:last-of-type) {

          td {
            border-bottom: 1px solid #0000001A;
          }
        }
      }
    }
  }
</style>