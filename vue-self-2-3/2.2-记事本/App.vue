<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain @del="handleDel" :list="list"></TodoMain>
    <TodoFooter @clear="handleClear" :list="list"></TodoFooter>
  </section>
</template>

<script>

import TodoMain from './components/TodoMain'
import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'

export default {
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list'))||[
        {id:1,name:'swim'},
        {id:2,name:'climb'},
        {id:3,name:'pull'}
      ]
    }
  },
  methods:{
    handleAdd(todoName){
      console.log(1);
      this.list.unshift(
      {
        id:+new Date(),
        name:todoName,
      })
    },
    handleDel(id){
      // console.log(id);
      this.list=this.list.filter(item =>item.id!== id)
    },
    handleClear(){
      this.list=[]
    }
  },

  watch:{
    list:{
      deep:true,
      handler(newValue){
        localStorage.setItem('list',JSON.stringify(newValue))
      }
    }
  },
  // watch:{
  //   list:{
  //     deep:true,
  //     handler(newValue){
  //       localStorage.setItem('list',JSON.stringify(newValue))
  //     }
  //   }
  // },


  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  }
}
</script>

<style>

</style>
