import { API_FAILED, API_LOADING, API_SUCCESS } from "../types";
import axios from "axios";

export const apiAction = () => async (dispatch) => {
    try{
        dispatch({
            type:API_LOADING
        });
         const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d9e2eda26ce9d82015a9827acd6e64c3&page=1")
        dispatch({
            type:API_SUCCESS,
            payload:data.results
        })
    }catch(err){
        dispatch({
            type:API_FAILED,
            payload:err
        })
    }
}

export const searchApiAction = (search) => async (dispatch) => {
    try{
        dispatch({
            type:API_LOADING
        });
         const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d9e2eda26ce9d82015a9827acd6e64c3&query=${search}`)
        dispatch({
            type:API_SUCCESS,
            payload:data.results
        })
    }catch(err){
        dispatch({
            type:API_FAILED,
            payload:err
        })
    }
}

