<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-warp">
        <MyHeader :receive="receive" />
        <MyList :todos="todos" :deletTodo="deletTodo" />
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入组件
  import MyHeader from './components/MyHeader'
  import MyList from './components/MyList'
  import MyFooter from './components/MyFooter'

  export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter },
    data() {
      return {
       //读取本地存储的任务
        todos:JSON.parse(localStorage.getItem('todos')) || [
          { id: "001", title: "每天完成一个小目标🎉", done: false },
          { id: "002", title: "在这里管理你的任务🎯", done: true },
          { id: "003", title: "创建任务后记得完成🎊", done: false }, 
        ]
      }
    },
    
    methods: {
      //添加新事项
      receive(todoboj) {
        this.todos.unshift(todoboj)  //将收到的值添加进todos
      },
      //删除事项
      deletTodo(id) { this.todos = this.todos.filter(todo => todo.id !== id) },
       //清空已完成事项
      clearAllTodo() {
        this.todos=this.todos.filter((todo) =>{
            return !todo.done
        })
      },
      //全选或全不选todos
      checkAllTodo(done) { this.todos.forEach((todo) => { todo.done = done }) },
      //编辑事项
      updateTodo(id,title){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.title = title
      })
    }
  },
   //用于监视todos数据，并保存和实时更新
    watch:{
      todos:{
        //讲新增的数据通过浏览器自带的本地存储localStorage进行存储
        //JSON.stringify用于将数据格式化成json文件
        //开启深度监视
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    },  
    mounted(){
      this.$bus.$on('updates',this.updateTodo)
    },
    beforeDestroy(){
      this.$bus.$off('updates')
    }
  }
</script>

<style lang="less">
  /* base */
  body {
    background-color: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    &:focus { outline: none;}
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;

    &:hover {
      color: #fff;
      background-color: #bd362f;
    }
  }

   .todowarp {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
   .todo-container {
      width: 600px;
      margin: 0 auto;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-image:linear-gradient( to right, white,rgb(253, 238, 221)) ;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    }

  .btn-edit{
    margin-right: 5px;
    color: #fff;
    background-color: #068325;
    border: 1px solid #1b7426;
  }

</style>