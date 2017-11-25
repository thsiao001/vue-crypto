<template>
  <div id="app">
    <ul>
      <li v-on:click="setActive('/home')" :class="{ active: isActive('/home') }">
        <a><router-link to="/">Home</router-link></a>
      </li>
      <li v-on:click="setActive('/watchlist')" :class="{ active: isActive('/watchlist') }">
        <a><router-link to="/watchlist">WatchList</router-link></a>
      </li>
    </ul>

    <div class="contents-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    setActive (page) {
      this.currentPage = page
    },
    isActive (page) {
      return this.currentPage === page
    }
  },
  data () {
    return {
      currentPage: '/home'
    }
  },
  mounted: function () {
    this.currentPage = this.$router.history.current.path
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.contents-container {
  margin-left: 25px;
  margin-right: 25px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 0px;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a{
  display: block;
  color: white;
  text-align: center;
  padding: 6px 16px;
  text-decoration: none;
}

li.active {
  background-color: #111;
}

li a:hover {
  background-color: #111;
}

</style>
