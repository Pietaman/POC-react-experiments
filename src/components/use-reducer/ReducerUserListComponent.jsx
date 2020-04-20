import React, { memo } from 'react';

import PaintCounterComponent from '../paint-counter/PaintCounterComponent';
import ReducerUserListItemComponent from './ReducerUserListItemComponent';

const CLASS = {
  userWrapper: 'user-wrapper',
  userList: 'user-list'
};

const renderListItems = (userList, dispatch) => {
  return userList.map((user) => {
    return (
      <ReducerUserListItemComponent
        key={user.id}
        user={user}
        dispatch={dispatch}
      />
    );
  });
};

const ReducerUserListComponent = ({ state, dispatch }) => {
  const { users: userList } = state;

  console.log('REDUCER - USER LIST');

  return (
    <div className={CLASS.userWrapper}>
      <h2>Users</h2>
      <ul className={CLASS.userList}>{renderListItems(userList, dispatch)}</ul>
      <PaintCounterComponent />
    </div>
  );
};

// Extreme performance: use second argument of React.memo to compare prev & next props
const areEqual = (prevProps, nextProps) => {
  return prevProps.state.users.length === nextProps.state.users.length;
};

export default memo(ReducerUserListComponent, areEqual);
