export interface FormInput {
    email: string,
    password: string,
}

// action strings
export const ADD_EMAIL = "ADD_EMAIL";
export const ADD_PASSWORD = "ADD_PASSWORD";

export interface AddEmailAction {
    type: typeof ADD_EMAIL;
    email: FormInput;
}

export interface AddPWAction {
    type: typeof ADD_PASSWORD;
    password: FormInput;
}

export type FormActionTypes = AddEmailAction | AddPWAction;

export type AppActions = FormActionTypes;