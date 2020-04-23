import React, { memo, useState } from 'react';

import PaintCounterComponent from '../paint-counter/PaintCounterComponent';
import ReducerUserListItemComponent from './CustomStoreUserListItemComponent';
import pocStore from './customStore';

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

const CustomStoreUserListComponent = () => {
  const { users: userList } = pocStore.getStore();
  const [stateUsers, setStateUsers] = useState(userList);

  pocStore.listen('UPDATE_USERS', () => {
    setStateUsers(pocStore.getStore().users);
  });

  console.log('REDUCER - USER LIST');

  return (
    <div className={CLASS.userWrapper}>
      <h2>Users</h2>
      <ul className={CLASS.userList}>{renderListItems(stateUsers)}</ul>
      <PaintCounterComponent />
    </div>
  );
};

export default memo(CustomStoreUserListComponent);

// Extreme performance: use second argument of React.memo to compare prev & next props
// const areEqual = (prevProps, nextProps) => {
//   return prevProps.state.users.length === nextProps.state.users.length;
// };

// export default memo(CustomStoreUserListComponent, areEqual);
