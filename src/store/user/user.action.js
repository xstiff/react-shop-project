import { createAction } from "@reduxjs/toolkit";

export const setCurrentUser = (user) => {
    return createAction("SET_CURRENT_USER", user);
};
