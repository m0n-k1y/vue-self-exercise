<template>
    <div class="my-tag">
      <input
      v-if="isEdit"
      v-focus
      ref="inp"
      @keyup.enter="handlechange"
      @blur="isEdit = false"
      :value="value"
      class="input"
      type="text"
      placeholder="输入标签"
      />
      <div 
      v-else
      @dblclick="handleclick"
      class="text">{{ value }}</div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      isEdit:false
    }
  },
  props:{
    value:String
  },
  methods:{
    handleclick(){
      this.isEdit=true
      // this.$nextTick(()=>(
      //     this.$refs.inp.focus()
      // ))
    },
    handlechange(e){
      if(e.target.value.trim()==='')
      return alert('error')
      this.$emit('input',e.target.value)
      this.isEdit=false
    }
  }
}
</script>

<style lang="less" scoped>

.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>