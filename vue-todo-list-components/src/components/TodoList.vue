// 列表
<template>
        <div id="list">
          <ul>
              <li v-for="(item,index) in filteredTodoList" v-bind:key="index" >
                  {{item.content}}
              </li>
          </ul>
        </div>
</template>
<script>
    export default{
        name:'TodoList',
        props:{
           filteredTodoList:Array 
        }
    } 
</script>   
