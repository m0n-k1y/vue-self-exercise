<template>
  <div class="App">
    <XtxShortCut> </XtxShortCut>
    <XtxHeaderNav></XtxHeaderNav>
    <XtxBanner></XtxBanner>
    <XtxNewGoods></XtxNewGoods>
    <XtxHotBrand></XtxHotBrand>
    <XtxTopic></XtxTopic>
    <XtxFooter></XtxFooter>
  </div>
</template>

<script>
import XtxShortCut from './components/XtxShortCut'
import XtxHeaderNav from './components/XtxHeaderNav'
import XtxBanner from './components/XtxBanner'
import XtxNewGoods from './components/XtxNewGoods'
import XtxHotBrand from './components/XtxHotBrand'
import XtxTopic from './components/XtxTopic'
import XtxFooter from './components/XtxFooter'


export default {
  components: {
    XtxShortCut,
    XtxHeaderNav,
    XtxBanner,
    XtxNewGoods,
    XtxHotBrand,
    XtxTopic,
    XtxFooter,
  }
}
</script>

<style>

</style>