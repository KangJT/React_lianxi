let defaultState={
    list:[],
}
let LIST=(state=defaultState,action)=>{
    const {type,payload}=action
    switch(type){
        case 'PUSH':
        console.log(payload)
        return {...state,list:[...payload]}
        default: return state
    }
}
export default LIST