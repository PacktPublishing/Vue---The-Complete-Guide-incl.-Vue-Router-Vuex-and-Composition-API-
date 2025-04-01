import * as types from './types';

export default {
    [types.MUTATE_UPDATE_VALUE]: (state, payload) => {
        state.value = payload;
    }
};