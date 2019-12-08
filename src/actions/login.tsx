import { FormInput, ADD_EMAIL, AppActions, ADD_PASSWORD } from '../types/forms';
import { Dispatch } from 'redux';
import { AppState } from '../store';

export const addEamil = (email: FormInput): AppActions => ({
    type: ADD_EMAIL,
    email
});

export const addPassword = (password: FormInput): AppActions => ({
    type: ADD_PASSWORD,
    password
});

export const updateEmail = (email: FormInput) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
      dispatch(addEamil(email));
    };
};

export const updatePassword = (password: FormInput) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
      dispatch(addPassword(password));
    };
};