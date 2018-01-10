import React from 'react';
import { PropTypes } from 'prop-types'
import classnames from 'classnames';
import styles from './FriendListItem.css';

const FriendListItem = ({name, starFriend, starred, deleteFriend, id, gender, updateGender}) => (
      <li className={styles.friendListItem}>
          <div className={`row  ${styles.friendListRow}`}>
            <div className={`col-sm-6  ${styles.friendInfos}`} >
              <div><span>{name}</span></div>
              <div>
                <small>xx friends in common</small>
              </div>
            </div>
            <div className={`col-sm-6 {styles.friendActions}`}>
              <button className={`btn btn-default ${styles.btnAction}`}
                      onClick={() => starFriend(id)}>
                <i className={classnames('fa', {
                  'fa-star': starred,
                  'fa-star-o': !starred
                })} />
              </button>
              <button className={`btn btn-default ${styles.btnAction}`}
                      onClick={() => deleteFriend(id)}>
                <i className="fa fa-trash" />
              </button>
              <select className={`form-control ${styles.selectedBox}`} value={gender} onChange={(e)=>updateGender(id, e.target.value)}>
                  <option value="male" >Male</option>
                  <option value="female">Female</option>
              </select>
            </div>
          </div>
      </li>
    );

FriendListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired,
    gender: PropTypes.string,
    updateGender: PropTypes.func.isRequired
};

export default FriendListItem
