import React from 'react';

import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import pocStore from './customStore';

const CLASS = {
  userListItem: 'user-list__item'
};

const UserListItemComponet = ({ user }) => {
  const handleDeleteUser = (id) => {
    pocStore.dispatch('UPDATE_USERS', { payload: { id } });
  };

  console.log('REDUCER - TODO LIST ITEM');

  return (
    <li className={CLASS.userListItem}>
      {user.name}
      <button onClick={() => handleDeleteUser(user.id)}>delete</button>
      <PaintCounterComponent />
    </li>
  );
};

export default UserListItemComponet;
