<template>
    <div id="app">
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
        <!-- 引用子组件 addNewTodo是子组件中定义的，addTodoList是方法 -->
           <CreateForm @addNewTodo="addTodoList"></CreateForm>
        <!-- todoList列表 -->
        <TodoList :filteredTodoList="filteredTodoList" @changeStatus="updateList"></TodoList>
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
       
        computed:{
            todoList:function(){
                  return this.$store.state. todoList;
            },
            currentFilter:function(){
                  return this.$store.state.currentFilter;
            },
            filteredTodoList:function(){
                  return this.$store.getters.filteredTodoList;
            },
        },
        methods:{
            addTodoList:function(inputingText){
                this.todoList.push({
                    content:inputingText,
                    status:"active"
                })                                     
            },
            handleStatusUpdate:function(status){
                this.$store.commit("handleStatusUpdate",status);
            },  
            updateList:function(item){
                this.$store.commit("updateList",item); 
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
