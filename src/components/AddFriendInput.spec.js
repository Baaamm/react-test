import React from 'react';
import AddFriendInput from './AddFriendInput';
import renderer from 'react-test-renderer';

it('renders only AddFriendInput correct', () => {
    const tree = renderer.create(<AddFriendInput addFriend = {() => {} }/>).toJSON();
    expect(tree).toMatchSnapshot();
});
