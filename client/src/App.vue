<style lang="scss">
body,html{
  width:100%;
  height:100%;
}
*{
  padding:0;
  margin:0;
}
.app{
  width:100%;
  height:100%;
}
</style>

<template>
  <div id="app" class="app">
    <!-- <router-link :to="{path:'/a'}">A</router-link>
    <router-link :to="{path:'/b'}">B</router-link>
    <router-link :to="{path:'/c'}">C</router-link> -->
    <!-- <router-link :to="{path:'/list'}">List</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    root () {
      return this.$store.state.root
    }
  },
  created () {
    // console.log(this.$store)
  }
}
</script>
