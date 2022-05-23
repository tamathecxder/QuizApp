import {
  CHANGE_CATEGORY, 
  CHANGE_DIFFICULTY, 
  CHANGE_TYPE, 
  CHANGE_AMOUNT, 
  CHANGE_SCORE 
} from "./actionTypes"

const initialState = {
  questions_category: "",
  questions_difficulty: "",
  questions_type: "",
  amount_of_question: 100,
  score: 0,
}

const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        questions_category: action.payload
      }
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        questions_difficulty: action.payload
      }
    case CHANGE_TYPE:
      return {
        ...state,
        questions_type: action.payload
      }
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount_of_question: action.payload
      }
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload
      }
    default:
      return state;
  }
}

export default reducer