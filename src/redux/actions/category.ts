import { SetCategoryAction, SET_CATEGORY } from "../../types";

export function SetCategory(category: string): SetCategoryAction {
  return {
    type: SET_CATEGORY,
    payload: {
      category,
    },
  };
}
