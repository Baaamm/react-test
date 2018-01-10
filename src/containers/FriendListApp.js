import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';
import {addFriend, deleteFriend, starFriend, updateGender, updatePage} from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';
import { getFriendsList, getTotalPages } from '../helpers/paginationHelper';


class FriendListApp extends Component {
    componentWillMount = () => {
        this.friendsById = getFriendsList(this.props);
        this.totalPages = getTotalPages(this.props);
    }

    componentWillReceiveProps = (nextProps) => {
        this.friendsById =  getFriendsList(nextProps);
        this.totalPages = getTotalPages(nextProps);
        if(this.friendsById.length === 0 && nextProps.pagination.page > 1){
            this.props.updatePage(nextProps.pagination.page - 1);
        }
    }

  render () {
    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput
            addFriend={this.props.addFriend}
        />

        <FriendList
            friends={this.friendsById}
            starFriend={this.props.starFriend}
            deleteFriend={this.props.deleteFriend}
            updateGender={this.props.updateGender}
            // we can also put the Paganation tag outside from FriendList and take these attributes(its cleaner, when its separated), like the pull request
            // but i dont want it that you thing i will use the same code :)
            updatePage={this.props.updatePage}
            actualPage={this.props.pagination.page}
            totalPages={this.totalPages}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFriend: name  => dispatch(addFriend(name)),
        deleteFriend: id => dispatch(deleteFriend(id)),
        starFriend: id => dispatch(starFriend(id)),
        updateGender: (id, gender) => dispatch(updateGender(id, gender)),
        updatePage: (page) => dispatch(updatePage(page))
    }
};

const mapStateToProps = (state) => {
    return {
      starFriend: state.starFriend,
      addFriend: state.addFriend,
      updateGender: state.updateGender,
      deleteFriend: state.deleteFriend,
      friendsById: state.friendlist.friendsById,
      pagination:  state.friendlist.pagination,
      updatePage: state.updatePage
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(FriendListApp)