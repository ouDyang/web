import * as actionTypes from './actionTypes';
import { fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    hotList:[],
    mouse:false,
    page:1,
    totalPage:1
});

export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.HOT_LIST_RESULT:
            return state.merge({
                hotList:action.data,
                totalPage:action.totalPage
            });
        case actionTypes.INPUT_BLUR:
            return state.set("focused",false);
        case actionTypes.INPUT_FOCUS:
            return state.set("focused",true);
        case actionTypes.MOUSE_OUT:
            return state.set("mouse",false);
        case actionTypes.MOUSE_IN:
            return state.set("mouse",true);
        case actionTypes.HOT_PAGE_CHANGE:
            return state.set("page",action.page);
        default:
            return state;
    }

}