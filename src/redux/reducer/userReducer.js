import  * as types from "../actions/actionsType";

const intialState = {
    users:[],
    details:[]
}


export const userReducer = (state=intialState,action) =>{

    switch(action.type){
        case types.GET_USERS:
            return{
                ...state,
                users:action.payload
            }
            case types.GET_DETAILS:
                return{
                    ...state,
                    details:action.payload
                }
            default:
                return state;
    }

}