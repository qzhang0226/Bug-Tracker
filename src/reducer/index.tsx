import { FormInput } from "../types/forms";
import { FormActionTypes } from "../types//forms";

const formReducerDefaultState: FormInput = { email: "", password: ""};

const loginReducer = (
    state = formReducerDefaultState,
    action: FormActionTypes
  ): any => {
    switch (action.type) {
      case "ADD_EMAIL":
        return {...state, email: action.email};
      case "ADD_PASSWORD":
        return {...state, password: action.password};
      default:
        return state;
    }
  };
  
export { loginReducer };
