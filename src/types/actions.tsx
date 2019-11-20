// action strings
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";

export interface RemoveExpenseAction {
    type: typeof REMOVE_EXPENSE;
    id: string;
  }

export type ExpenseActionTypes =
  | RemoveExpenseAction

export type AppActions = ExpenseActionTypes;