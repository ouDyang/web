import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

export const onMouseIn= ()=>({
    type:actionTypes.MOUSE_IN
});

export const onMouseOut= ()=>({
    type:actionTypes.MOUSE_OUT
});

export const onHotPageChange=(page)=>({
    type:actionTypes.HOT_PAGE_CHANGE,
    page
});

export const inputFocus = () => ({
    type: actionTypes.INPUT_FOCUS
});

export const inputBlur = () => ({
    type: actionTypes.INPUT_BLUR
});

const actionGetHotList = (data)=>({
    type:actionTypes.HOT_LIST_RESULT,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
});

export const getHotList = ()=>{
    return (dispatch)=>{
        axios.get("/api/getHotList.json").then((res)=>{
            dispatch(actionGetHotList(res.data.data));
        }).catch((error)=>{

            })
    }
};