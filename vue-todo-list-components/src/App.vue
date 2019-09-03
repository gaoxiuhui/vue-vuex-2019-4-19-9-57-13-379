<template>
    <div id="app">
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
        <!-- 引用子组件 addNewTodo是子组件中定义的，addTodoList是方法 -->
           <CreateForm @addNewTodo="addTodoList"></CreateForm>
        <!-- todoList列表 -->
        <TodoList :filteredTodoList=" filteredTodoList" @changeStatus="updateList"></TodoList>
        <!-- filter 过滤器 -->
         当前状态：{{currentFilter}}
        <TodoListFilter @handleStatusUpdate="handleStatusUpdate"></TodoListFilter> 
    </div>
</template>

<script>
    // 导入子组件
    import CreateForm from './components/CreateForm.vue'
    import TodoList from './components/TodoList.vue'
    import TodoListFilter from  './components/TodoListFilter.vue'

    export default {
        name: 'app',
        components: {
           CreateForm,
           TodoList,
           TodoListFilter
        },
        data: function () {
            return {
                /**
                 * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
                 * 定义了 todo 的两种状态 completed、active，默认为 active
                 */
                todoList: [
                          {content:"吃饭",status:"active"},
                          {content:"睡觉",status:"completed"},
                          {content:"打豆豆",status:"active"}
                ],
                inputingText:"",
                currentFilter: 'active'
            }
        },
        
        computed:{
            // todoList:function(){

            // },
            // currentFilter:function(){

            // },
            filteredTodoList:function(){
                  console.log(this.todoList,this.currentFilter);  
                  let filteredList=[];
                  for (let index = 0; index <this.todoList.length; index++) {
                      const element = this.todoList[index];
                      if(element.status===this.currentFilter||this.currentFilter=="all"){
                          filteredList.push(element);
                      }
                  }
                  return filteredList;
             }
        },
        methods:{
            addTodoList:function(inputingText){
                console.log(arguments);
                this.todoList.push({
                    content:inputingText,
                    status:"active"
                })                                     
            },
            handleStatusUpdate:function(status){
                 this.currentFilter=status;
            },  
            updateList:function(item){
                  this.todoList.forEach(element=>{
                    if(element.content==item.content){
                      element.status=item.status;
                    }
                  })
            }       
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
</style>
