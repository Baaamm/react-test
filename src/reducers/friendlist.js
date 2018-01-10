import * as types from '../constants/ActionTypes';
import {PAGE_SIZE} from "../constants/Common";
import uuidv4 from 'uuid/v4';

const initialState = {
    // we can also split in 2 reducers, one for friendlist and one for pagination
    pagination: {
        page: 1,
        pageSize: PAGE_SIZE,
    },

    friendsById: [
        {
            id: uuidv4(),
            name: 'Theodore Roosevelt',
            starred: true,
            gender: 'male'
        },
        {
            id: uuidv4(),
            name: 'Abraham Lincoln',
            starred: false,
            gender: 'male'
        },
        {
            id: uuidv4(),
            name: 'George Washington',
            starred: false,
            gender: 'female'
        }
    ]
};

export default function friends(state = initialState, action) {
    switch (action.type) {

        case types.ADD_FRIEND:
            return {
                ...state,
                friendsById: [
                    ...state.friendsById,
                    {
                        name: action.name,
                        id: uuidv4()
                    }
                ],
            };

        case types.DELETE_FRIEND:
            return {
                ...state,
                friendsById: state.friendsById.filter((item) => item.id !== action.id),
            };

        case types.STAR_FRIEND:
            let friends = [...state.friendsById];
            let friend = friends.find((item) => item.id === action.id);
            friend.starred = !friend.starred;
            return {
                ...state,
                friendsById: friends
            };

        case types.UPDATE_GENDER:
            let friendsList = [...state.friendsById];
            let selectedFriend = friendsList.find((item) => item.id === action.id);
            selectedFriend.gender = action.gender;
            return {
                ...state,
                friendsById: friendsList
            };

        case types.UPDATE_PAGE:
            return {
                ...state,
                pagination: {
                    page: action.page,
                    pageSize: state.pagination.pageSize
                }
            };

        default:
            return state;
    }
}