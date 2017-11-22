<template>
    <div class="home">
        <router-link to="/watchlist">WatchList</router-link>
        <table-grid
                :data="gridData"
                :columns="gridColumns"
                :filter-key="searchQuery">
        </table-grid>
    </div>
</template>

<script>
  import TableGrid from './TableGrid.vue'
  export default {
    name: 'Home',
    components: { TableGrid },
    data () {
      return {
        searchQuery: '',
        gridColumns: ['rank', 'symbol', '24h_volume_usd', 'price_usd', 'price_btc'],
        gridData: []
      }
    },
    methods: {
      getCoinInfo: function () {
        this.$http.get('https://api.coinmarketcap.com/v1/ticker/')
          .then(function (res) {
            this.gridData = res.body
          })
      }
    },
    mounted: function () {
      this.getCoinInfo()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
