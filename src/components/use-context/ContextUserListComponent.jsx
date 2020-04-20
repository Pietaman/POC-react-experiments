import React, { memo, useContext } from 'react';

import PaintCounterComponent from '../paint-counter/PaintCounterComponent';
import ReducerUserListItemComponent from './ContextUserListItemComponent';

import { stateContext } from './ContextApp';

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

const ContextUserListComponent = () => {
  const { state, dispatch } = useContext(stateContext);
  const { users: userList } = state;

  console.log('CONTEXT - USER LIST');

  return (
    <div className={CLASS.userWrapper}>
      <h2>Users</h2>
      <ul className={CLASS.userList}>{renderListItems(userList, dispatch)}</ul>
      <PaintCounterComponent />
    </div>
  );
};

export default memo(ContextUserListComponent);
