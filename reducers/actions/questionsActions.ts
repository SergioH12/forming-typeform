export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_INDUSTRY = "SET_INDUSTRY";
export const SET_ROLE = "SET_ROLE";
export const SET_GOALS = "SET_GOALS";
export const REMOVE_GOAL = "REMOVE_GOAL";
export const SET_EMAIL = "SET_EMAIL";
export const SET_AGE = "SET_AGE";
export const SET_DATE = "SET_DATE";
export const SET_SCORE = "SET_SCORE";

export type QuestionsActionsType =
  | { type: "SET_FIRST_NAME"; payload: string }
  | {
      type: "SET_LAST_NAME";
      payload: string;
    }
  | {
      type: "SET_INDUSTRY";
      payload: string;
    }
  | { type: "SET_ROLE"; payload: string }
  | { type: "SET_GOALS"; payload: string }
  | { type: "REMOVE_GOAL"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_DATE"; payload: string }
  | { type: "SET_AGE"; payload: string }
  | { type: "SET_SCORE"; payload: string };
