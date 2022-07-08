import { API_FAILED, API_LOADING, API_SUCCESS } from "../types"

const initialState={
    loading:false,
    data:[],
    error:""
}


const apiReducer = (state=initialState,action) => {
    switch(action.type){
        case API_LOADING:
            return {
                loading:true,
                data:[],
                error:""
            }
        case API_SUCCESS:
            return {
                loading:false,
                data:action.payload,
                error:""
            }
        case API_FAILED:
            return {
                loading:false,
                data:[],
                error:action.payload
            }
        default:
            return state
    }
}

export default apiReducer