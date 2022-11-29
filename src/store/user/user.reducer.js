const INITIAL_STATE = {
    CurrentUser: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                CurrentUser: payload,
            };
        default:
            return state;
    }
};
