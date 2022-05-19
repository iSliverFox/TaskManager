<template>
    <div class="todo-header">
        <input type="text" placeholder="添加一个新的待办" autofocus @keyup.enter="add" v-model='title'/>  <!-- 注意此处必须添加动态绑定 -->
        <i class="fa fa-plus-square" @click="add" title="添加新的任务" ></i> 
        
    </div>
</template>

<script>
    import { nanoid } from 'nanoid'  //用于生产随机id的库
    export default {
        name: 'MyHeader',
        props:['receive'],  //接收传入的函数
        data(){
            return{
                title:''
            }},
        methods: {
            add() {
                //如果输入为空则弹出提示
                if(!this.title) return alert('输入不能为空')
                console.log(this.title)
                
                // 将用户的输入包装为一个对象
                const todoboj = { id:nanoid(), title:this.title, done: false, isEdit: false }
                this.receive(todoboj)  //调用receive函数并将todoboj对象传回App
                this.title=''   //添加新待办后，自动清空输入框（注意，此处在操作DOM）
            }
        },
    }
</script>

<style lang="less" scoped>
    /* header */
    .todo-header{
        display: flex;
        flex-flow: column warp;
        align-items: center;
    }
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
        &:focus {
            outline: none;
            border-color: rgba(82, 168, 236, 0.8);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.8)
        }
    }
    .fa{
        cursor: pointer;
        font-size: 22px; 
        color:rgb(195, 205, 235);
        padding-left: 8px;
        background-size:auto;
        background-repeat: no-repeat center;
        &:hover{
            color:rgb(14, 85, 237);
        }
    }
   
</style>