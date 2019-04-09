let defaltState={
    list:[],
    arr:[]
}
let LIST=(state=defaltState,action)=>{
    const {type,payload}=action
    switch(type){
        case 'PUSH':
        return {...state,list:[...payload]}
        case 'UPDATE':
        // console.log(payload)
        return {...state,arr:[...payload]}
        default:return state
    }
}
export default LIST