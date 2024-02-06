<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handle"></TodoHeader>
    <TodoMainer :list="list"></TodoMainer>
    <TodoFooter></TodoFooter>
</section>
</template>

<script>

import TodoFooter from './components/TodoFooter'
import TodoMainer from './components/TodoMainer'
import TodoHeader from './components/TodoHeader'


export default {
  data () {
    return {
      list:[
        { id: 1, Name: 'run' },
        { id: 2, Name: 'climb' }
      ]
    }
  },
  methods:{
    handle(todoName){
        // console.log(todoName);
        this.list.unshift({
          id:+new Date(),
          Name:todoName,
        })

    }
  },
  components: {
    TodoFooter,
    TodoMainer,
    TodoHeader
  }
}
</script>

<style>

</style>
