<template>
  <ul class="todo-main">
    <MyItem :key="t.id" v-for="t in todos" :todo="t" :deletTodo="deletTodo"/>
  </ul>
</template>

<script>
  import MyItem from './MyItem'

  export default {
    name: 'MyList',
    components: { MyItem },
    props: ['todos','deletTodo'],  //声明接受todo对象

  }
</script>

<style scoped>
  /* main */
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>