//  add的组件 
<template>
    <div>
        <input type="text" :value="inputingText" @change="handleChange">
        <button @click="handleAdd">add</button>
    </div>
</template>

<script>
    export default {
        name: 'create-form',
        computed:{
            inputingText:function(){
                  return this.$store.state.inputingText;
            },
        },    
        methods:{
                 handleChange:function(event){              
                    this.inputingText=event.target.value; 
                },
                handleAdd:function(){              
                    this.$emit("addNewTodo",this.inputingText); 
                },
        }
    }
</script>
