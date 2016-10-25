import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    // console.log('Action received', action);//we only care action.payload.data
    switch (action.type){
        case FETCH_WEATHER :
            return [ action.payload.data, ...state ];//ES6 syntax
            // return state.concat([action.payload.data]);
    }

    return state;
}