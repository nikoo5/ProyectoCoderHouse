import KNOTS from "../../data/knots";
import {
  ADD_KNOT,
  DELETE_KNOT,
  GET_FAVORITES,
  SELECT_KNOT,
  TOGGLE_FAVORITE,
} from "../actions/knots.actions";
import { selectComment } from "../actions/comments.actions";

const INITIAL_STATE = {
  list: KNOTS,
  filteredKnots: [],
  selected: null,
};

const KnotsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_KNOT:
      const knotIndex = state.list.findIndex(
        (knot) => knot.id == action.knotID
      );
      if (knotIndex === -1) return { ...state, selected: null };
      return {
        ...state,
        selected: state.list[knotIndex],
      };

    case ADD_KNOT:
      return {
        ...state,
        list: [action.knotItem, ...state.list],
      };
    case DELETE_KNOT:
      return {
        ...state,
        list: [...state.list.filter((knot) => knot.id !== action.knotID)],
        selected: null,
      };
    case TOGGLE_FAVORITE: {
      const newList = [...state.list];
      const knotIndex = newList.findIndex((knot) => knot.id == action.knotID);
      if (knotIndex === -1) return { ...state };

      newList[knotIndex].favorite = !newList[knotIndex].favorite;

      const newSelected = { ...state.selected };
      if (newSelected != null) {
        newSelected.favorite = !newSelected.favorite;
      }

      return {
        ...state,
        list: newList,
        filteredKnots: [...newList.filter((knot) => knot.favorite)],
        selected: newSelected,
      };
    }
    case GET_FAVORITES:
      return {
        ...state,
        filteredKnots: [...state.list.filter((knot) => knot.favorite)],
      };
    default:
      return { ...state };
  }
};

export default KnotsReducer;
