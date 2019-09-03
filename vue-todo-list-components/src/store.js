export default{
    strict:true,
    state: {
        // 应用的数据
        todoList: [
            {content:"吃饭",status:"active"},
            {content:"睡觉",status:"completed"},
            {content:"打豆豆",status:"active"}
        ],
        inputingText:"",
        currentFilter: 'active',
        actived:''
    },
    getters:{
     //获得filterList      
     filteredTodoList:function(state){   
        let filteredList=[];
        for (let index = 0; index <state.todoList.length; index++) {
            const element = state.todoList[index];
            if(element.status===state.currentFilter||state.currentFilter=="all"){
                filteredList.push(element);
            }
        }
        return filteredList;
   }  
    },
    mutations:{
        handleStatusUpdate(state,status){
            state.currentFilter=status;
        },
        updateList(state,item){
            state.todoList.forEach(element=>{
                if(element.content==item.content){
                  element.status=item.status;
                }
              })
        },
        changeStatus(state,item){
            if(!item.checked){
                item.status='completed';
                item.checked = true;
                } 
            else{ 
                item.status='active';
                item.checked=false;
                };
        },
        handleStatusUpdate(state,status){
                state.actived=status;
        },
    }

}