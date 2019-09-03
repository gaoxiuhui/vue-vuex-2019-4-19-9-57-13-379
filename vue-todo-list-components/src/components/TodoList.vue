// 列表
<template>
        <div id="list">
          <ul>
              <li v-for="(item,index) in filteredTodoList" v-bind:key="index" >
                <input type="checkbox" id="index" v-model="item.checkd" @changeStatus="changeStatus(item)">
                <span v-if="item.checkd" class='checked'>{{item.content}}</span>
                 <span v-else>{{item.content}}</span>          
              </li>
          </ul>
        </div>
</template>
<script>
    export default{
        name:'TodoList',
        props:{
           filteredTodoList:Array 
        },
        methods:{
            changeStatus:function(item){
              if(!item.checked){
                  item.status='completed';
                  item.checked = true;
                  } 
              else{ 
                  item.status='active';
                  item.checked=false;
                  };
              this.$emit("changeStatus",item);
          }  
        }
    } 
</script> 
<style>
   .checked {
        text-decoration: line-through;
    }
</style>