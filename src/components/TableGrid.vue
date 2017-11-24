<template>
    <table id="coins">
        <thead>
            <tr>
                <th v-for="key in displayColumns"
                    @click="sortBy(key)"
                    v-bind:class="{ active: sortKey == key }">
                    {{ key | capitalize }}
                    <span v-if="sortKey == key" class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>

                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in filteredData">
                <td v-for="key in columns">
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
  export default {
    props: {
      data: Array,
      displayColumns: Array,
      columns: Array,
      filterKey: String
    },
    data: function () {
      var sortOrders = {}
      this.displayColumns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var sortObjKey = this.sortObjKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var data = this.data
        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortObjKey]
            b = b[sortObjKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      }
    },
    filters: {
      capitalize: function (str) {
        return str[0].toUpperCase() + str.slice(1)
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortObjKey = this.columns[this.displayColumns.indexOf(key)]
        this.sortOrders[this.sortKey] = this.sortOrders[key] * -1
      }
    }
  }
</script>

<style scoped>
    #coins {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #coins td, #coins th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #coins tr:nth-child(even){background-color: #f2f2f2;}

    #coins tr:hover {background-color: #ddd;}

    #coins th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
    }

    .active {
        color: #fff;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
    }
</style>