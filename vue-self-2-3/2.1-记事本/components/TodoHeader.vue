<template>
      <!-- 输入框 -->
      <header class="header">
        <h1>记事本</h1>
        <input v-model="todoName"
               @keyup.enter="handleAdd"
        placeholder="请输入任务" class="new-todo" />
        <button @click="handleAdd"
        class="add">添加任务</button>
      </header>
</template>

<script>
export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods:{
    handleAdd(){
      if(this.todoName.trim()===''){
        alert('None')
        return 
      }
      this.$emit('add',this.todoName);
      this.todoName=''
      // console.log(this.todoName);
    }
  }
}
</script>

<style>

</style>