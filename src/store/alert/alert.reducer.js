const ALERT_INITIAL_VALUE = {
    isAlertVisible: false,
    alertType: "in",
};

export const AlertReducer = (state = ALERT_INITIAL_VALUE, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_IS_ALERT_VISIBLE":
            return {
                ...state,
                isAlertVisible: payload,
            };
        case "SET_ALERT_TYPE":
            return {
                ...state,
                alertType: payload.toLowerCase(),
            };
        default:
            return state;
    }
};
