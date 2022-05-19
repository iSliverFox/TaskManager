<template>
    <div class="todo-footer" v-show="total">  <!-- v-show会控制标签中的display属性，且填入其中的值会被解析为布尔值，即大于0的值都是true，等于0则为false -->
        <label>
            <input type="checkbox" v-model="isAll"/>   <!-- v-model绑定布尔值 -->
        </label>
        <span>
            <span>已完成 {{doneTotal}}</span> / 全部 {{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: 'MyFooter',
        props:['todos','checkAllTodo','clearAllTodo'],
        computed:{
            total(){
                return this.todos.length 
            },
            doneTotal(){
                //reduce用于条件统计
                //末尾的0是为pre赋的初始值，默认为0
                //checkbox每改变一次，该函数就会被执行
                // current表示当前值，current.done ? 1:0 判断语句表示，判断todos中的done是真还是加，为真则current加1，为假则加0
                return this.todos.reduce((pre,current) => pre + (current.done ? 1:0),0)  //这里最后一个0就是pre的值
            },
            //计算属性的完整写法
            isAll:{  //此处必须写成配置对象的形式，否则报错
                get(){
                    return this.doneTotal === this.total  && this.total > 0
                },
                set(value){  //此处的value就是checkbox是否勾选，即true或false
                    this.checkAllTodo(value)
                }
            }
        },
        methods: {
            clearAll(){  //clearAll不需要传回值，它只需要通知App，将所有done为true的事项删除即可
                this.clearAllTodo()
            }
        },
    }
</script>

<style scoped lang="less">
    /* footer */
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
        label{
            display: inline-block;
            margin-right:10px;
            input{
                cursor:pointer;
                position: relative;
                top: 2px;
                vertical-align: middle;
                margin-right: 5px;
            }
            
        }
        button{
            float: right;
            margin-top: 5px;
        }
    }
</style>