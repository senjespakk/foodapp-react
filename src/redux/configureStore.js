import { createStore, combineReducers } from 'redux';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Dishes } from './dishes';
import { Comments } from './comments';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;

}