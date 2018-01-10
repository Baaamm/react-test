import React from 'react';
import { PropTypes } from 'prop-types'
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import Pagination from './Pagination';

const FriendList = ({friends, deleteFriend, starFriend,
                        updateGender, actualPage, totalPages, updatePage}) => (
    <div>
        <ul className={styles.friendList}>
            {
                friends.map((friend, index) => {
                    return (
                        <FriendListItem
                            key={index}
                            id={friend.id}
                            name={friend.name}
                            starred={friend.starred}
                            deleteFriend={deleteFriend}
                            starFriend={starFriend}
                            updateGender={updateGender}
                            gender={friend.gender}
                        />
                    );
                })
            }
        </ul>
        {
            totalPages > 1 &&
                <Pagination
                    actualPage={actualPage}
                    totalPages={totalPages}
                    updatePage={updatePage}
            />
        }
    </div>
);

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    deleteFriend: PropTypes.func.isRequired,
    starFriend: PropTypes.func.isRequired,
    updateGender: PropTypes.func.isRequired,
    actualPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired
};

export default FriendList;
