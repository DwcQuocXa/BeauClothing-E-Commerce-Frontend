import { SetCategoryAction, SET_CATEGORY, CategoryState } from "../../types";

const initialState: CategoryState = {
  category: "View All",
};
export default function switchTheme(
  state = initialState,
  action: SetCategoryAction
): CategoryState {
  switch (action.type) {
    case SET_CATEGORY:
      const { category } = action.payload;
      return { ...state, category: category };

    default:
      return state;
  }
}
