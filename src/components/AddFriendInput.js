import React from 'react';
import { PropTypes } from 'prop-types'
import classnames from 'classnames';
import styles from './AddFriendInput.css';

const AddFriendInput = ( {addFriend} ) => (
    <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        onKeyDown={(e) => {
                if(e.which===13) {
                    addFriend(e.target.value);
                    e.target.value = '';
                }
            }
        }
    />
);

AddFriendInput.propTypes = {
    addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
