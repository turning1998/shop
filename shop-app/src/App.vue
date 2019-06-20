<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="cfooter"></router-view><!--可选-->
    <!--<c-footer></c-footer>-->
  </div>
</template>
<script>
//import CFooter from './components/CFooter'
export default {
  name: 'app',
  //components: {
   // CFooter
   
  //}
}
</script>

<style lang="scss">
</style>
