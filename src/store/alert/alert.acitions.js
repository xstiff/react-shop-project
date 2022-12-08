import { createAction } from "@reduxjs/toolkit";

export const setAlertVisibility = createAction("SET_IS_ALERT_VISIBLE"); // True  or false
export const setAlertType = createAction("SET_ALERT_TYPE"); // in or out
