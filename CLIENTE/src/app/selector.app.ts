
import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromUtenteReducer from './reducer/utente.reducer';

export const selectUtenteState = createFeatureSelector<fromUtenteReducer.Initial>(
    fromUtenteReducer.utenteFeatureKey,
);

export const selectUtente = createSelector(
    selectUtenteState,
    (state: fromUtenteReducer.Initial) => state.titleApp
);