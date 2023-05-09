<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(el, i) in head" :key="i">{{ el.title  }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in body"
          :key="item.id"
          @click="navigate(item.id)"
        >
          <td
            v-for="(property, ind) in head"
            :key="ind"
            :data-label="property.title"
          >
            {{ item[property.prop] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      head: {
        type: Array,
      },
      body: {
        type: Object,
      }
    },
    methods: {
      navigate(index) {
        document.location = this.$route.path + '/' + index;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .table-container {
    overflow-x: auto;

    table {
      border-spacing: 0;
      overflow: hidden;
      max-width: 1024px;
      min-width: calc(256px);
      width: 100%;
  
      th, td {
        padding: 16px;
      }
      
      th {
        background-color: #1400FF;
        color: white;
        text-align: left;
        padding-right: 32px;
      }

      thead {
        display: none;
      }
  
      tbody {
        tr {
          transition: 0.3s;
          cursor: pointer;
          display: block;
          margin-bottom: 16px;
          border: 1px solid #0000001A;
          background-color: white;
          border-radius: 15px;

                
          &:hover {
            background-color: #F9F9F9;
          }

          td {
            display: block;
            text-align: right;

            &:not(:last-of-type) {
              border-bottom: 1px solid #0000001A;
            }


            &::before {
              content: attr(data-label);
              float: left;
              font-weight: 800;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 860px) {
    .table-container {
      table {
        background-color: white;
        border: 1px solid #0000001A;
        border-radius: 15px;


        thead {
          display: table-header-group;
        }
        tbody {
          tr {
            display: table-row;

            td {
              display: table-cell;
              text-align: left;
              border-bottom: 1px solid #0000001A;


              &::before {
                content: none;
              }
            }

            &:last-of-type {
              td {
                border-bottom: none;
              }
            }
          }
        }
      }
    }
  }
</style>