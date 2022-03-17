import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETE,
} from "./ActionsType";

export const addtodo = (newtodo) => {
  return {
    type: ADD_TODO,
    payload: newtodo,
  };
};

export const removetodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const editedtodo = (edittodo) => {
  return {
    type: EDIT_TODO,
    payload: edittodo,
  };
};

export const togglecomplete = (id) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id,
  };
};
