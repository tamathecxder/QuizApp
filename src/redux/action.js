import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_AMOUNT,
  CHANGE_SCORE
} from './actionTypes';

// membuat fungsi yang akan dijalankan didalam settings untuk memperbarui reducer
export const handleChangeCategory = (payload) => {
  return {
    type: CHANGE_CATEGORY,
    payload
  }
}
 
export const handleChangeDifficulty = (payload) => {
  return {
    type: CHANGE_DIFFICULTY,
    payload
  }
}
 
export const handleChangeType = (payload) => {
  return {
    type: CHANGE_TYPE,
    payload
  }
}
 
export const handleChangeAmount = (payload) => {
  return {
    type: CHANGE_AMOUNT,
    payload
  }
}
 
export const handleChangScore = (payload) => {
  return {
    type: CHANGE_SCORE,
    payload
  }
}
 
