import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
    isLoading: true,
    errMsg: null,
    promo: [] }, action) => {
    switch(action.type) {
        case ActionTypes.PROMOTIONS_LOADING:
            return {...state, isLoading: true, errMsg: null, promo: []};
        
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMsg: null, promo: action.payload};

        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload, promo: []};

        default:
            return state;
    }
}