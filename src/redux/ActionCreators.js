import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// this block adds comment action to state
export const addComment = (dishId, rating, author, comment) => ({
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    });

// this block add thunk to the dishes state
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes/')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const dishesFailed = (errMsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMsg
});

// this block add thunk to promotions state

export const fetchPromo = () => (dispatch) => {
    dispatch(promoloading(true));
    return fetch(baseUrl + 'promotions/')
        .then(response => response.json())
        .then(promotions => dispatch(addPromo(promotions)));
};

export const promoloading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING,
});

export const addPromo = (promo) => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promo
});

export const promoFailed = (errMsg) => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMsg
});

// this block adds thunk to leaders state

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));
    return fetch(baseUrl + 'leaders/')
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const leadersFailed = (errMsg) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMsg
});

// this block adds thunk to comment state

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments/')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
}

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const commentsFailed = (errMsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMsg
});