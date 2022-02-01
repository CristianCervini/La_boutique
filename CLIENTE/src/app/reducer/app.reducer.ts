import {Action} from '@ngrx/store';
import * as AppAction from '../actions/app.action';
import { AppProperties } from '../models/appProperties';

const initialState : AppProperties = {
    titleApp : ''
}

export function AppReducer(state : AppProperties = initialState, action : AppAction.Actions){
    switch (action.type) {
        case AppAction.ADD_PROPERTY:
            return {...state, ...action.payload};
        default:
            return state;
    }
}