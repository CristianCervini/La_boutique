import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { AppProperties } from '../models/appProperties';

export const ADD_PROPERTY = '[PROPERTY] Add';

export class addProperty implements Action{
    readonly type = ADD_PROPERTY;

    constructor(public payload : AppProperties){}
}

export type Actions = addProperty;