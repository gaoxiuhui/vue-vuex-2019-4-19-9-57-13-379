// filter
<template>
        <div id="filter">          
            <button @click="handleStatusUpdate('all')" :class="{active:actived== 'all'}">all</button>
            <button @click="handleStatusUpdate('active')" :class="{active:actived== 'active'}">active</button> 
            <button @click="handleStatusUpdate('completed')" :class="{active:actived== 'completed'}">completed</button>
        </div>
</template>    
<script>
    export default {
         name: 'TodoListFilter',
         data:function(){
             return {
                actived:''
             }
         },
         methods:{
                 handleStatusUpdate:function(status){              
                    this.$emit("handleStatusUpdate",status); 
                    this.actived = status;
                },              
        }
    }
</script>

<style scoped>

button {
margin: 0 10px;
line-height: 20px;
}

.active {
color: #f60;
border: 1px solid #ccc;
border-radius: 2px;
padding: 3px;
cursor: pointer;
}
</style>