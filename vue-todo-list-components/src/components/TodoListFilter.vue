// filter
<template>
        <div id="filter">          
            <button @click="handleStatusUpdate('all')">all</button>
            <button @click="handleStatusUpdate('active')">active</button>
            <button @click="handleStatusUpdate('completed')">completed</button>
        </div>
</template>    
<script>
    export default {
         name: 'TodoListFilter',
         methods:{
                 handleStatusUpdate:function(status){              
                    this.$emit("handleStatusUpdate",status); 
                },              
        }
    }
</script>
