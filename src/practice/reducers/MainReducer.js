const pics=[];

export default(state=pics,action)=>{
    switch (action.type) {
        case "DATA_ADD":
        return[
            ...state,action.payload,
        ]
    
        default:
           return state;
    }

}