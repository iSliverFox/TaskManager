<template>
  <li>
    <label>
      <!-- 使用v-model双向数据绑定，既可以初始化checkbox，又可以监视变化 -->
      <!-- 使用v-model虽然可以简单快速的监视和变更数据，但是它更改了props中的数据，这违反了Vue的原则，不推荐这种用法 -->
      <input type="checkbox" v-model="todo.done"/>
      <span v-show="!todo.isEdit" :class="finish">{{todo.title}}</span>
      <!-- @blur失去焦点事件：即目标元素失去焦点的时候执行 -->
      <input v-show="todo.isEdit" type="text" :value="todo.title"  @blur="handleBlur(todo,$event)" ref="inputVal"/>
    </label>
    <button class="btn btn-danger" @click="remove(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
  export default {
    name: 'MyItem',
    data(){
      return{
        finish:''
      }},
    props: ['todo','deletTodo'],  //声明接受todo对象
      //为完成的事项添加删除线
    mounted() { if (this.todo.done) this.finish = 'finished'},  //在加载时判断一次，是否有已完成的事项
    updated() {   //每更新一次就判断是否有事项被变更
      if (this.todo.done) this.finish = 'finished' 
      else this.finish = ''
    },
    methods:{
      // 删除
      remove(id){
        //confirm与alert不同是，confirm会返回点击的按钮逻辑，如果点击确定，则执行，取消则不执行
        // if(confirm('确定删除吗？')){
          // 通知app删除
          this.deletTodo(id)
        // }
      },
      //编辑
      handleEdit(todo){
        // todo.isEdit = true  这种方式添加的isEdit是非响应式的，Vue不会执行它
        //添加一个判断，当todo身上已经存在isEdit时，不再为其追加该属性
        //[hasOwnProperty API即用于判断某属性是否存在于元素上]
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
          console.log('isEdit已存在')
        }
        else{
          console.log('isEdit已新增')
          this.$set(todo,'isEdit',true)  //调用setter，向todo中添加新属性isedit，属性值为true
        }
        //点击编辑按钮的同时，自动为input获取焦点
        // this.$refs.inputVal.focus()  直接使用这种方法Vue并不会帮你获取焦点，这是由于Vue的执行逻辑导致的
        // $nextTick指定的函数或者DOM 结点更新之后再执行
        this.$nextTick(function(){
          this.$refs.inputVal.focus()
        })
      },
     
    //失去焦点，同时触发编辑
      handleBlur(todo,e){   //e即$event事件对象
        console.log('blur被调用了')
        todo.isEdit = false
        this.$bus.$emit('updates', todo.id, e.target.value)  //获取todo的id及其新输入的值
      }
    },
  }
</script>

<style lang="less" scoped>
  span.finished{
    animation:f .5s forwards;
  }
  @keyframes f {
    from{}
    to{
      text-decoration: line-through;
      color: gray;
  }
  }
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    &:hover {
      background-color: rgba(230,230,230,.4);
      button {
        display: block;
      }
    }

    label {
      float: left;
      cursor: pointer;

      input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
      }
    }

    button {
      float: right;
      display: none;
      margin-top: 3px;

    }

    &:before {
      content: initial;
    }

    &:last-child {
      border-bottom: none;
    }
  }
</style>