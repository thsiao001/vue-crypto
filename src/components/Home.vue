<template>
    <div class="home">
        <h1>Cryptopia</h1>
        <router-link to="/watchlist">WatchList</router-link>
        <table-grid
                :data="gridData"
                :display-columns="gridDisplayColumn"
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
        gridDisplayColumn: ['Rank', 'Name', 'Symbol', '24H Volume', 'Price $', 'Price (btc)', 'Market Cap $', '%  Change 24H', '%  Change 7D'],
        gridColumns: ['rank', 'name', 'symbol', '24h_volume_usd', 'price_usd', 'price_btc', 'market_cap_usd', 'percent_change_24h', 'percent_change_7d'],
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
