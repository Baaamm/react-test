import * as types from '../constants/ActionTypes';

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}

export function updateGender(id, gender) {
    return {
        type: types.UPDATE_GENDER,
        id,
        gender
    };
}

// for clearnes we can put it like the pull request in the seperate file for example PaginationActions.js
export function updatePage(page) {
    return {
        type: types.UPDATE_PAGE,
        page
    };
}