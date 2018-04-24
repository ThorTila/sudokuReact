import { 
    SHOW_MENU,
    HIDE_MENU
} from '../actions/menu-actions';

const initialState = {
    showed: false 
};

export const menuReducer = function (state = initialState, action) {
    switch (action.type) {
        default: 
            return state;
    }
}