import React from 'react';

import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import pocStore from './customStore';

const CLASS = {
  userListItem: 'user-list__item'
};

const UserListItemComponet = ({ user }) => {
  const handleDeleteUser = (id) => {
    const { users } = pocStore.getStore();

    const updatedUsers = users.filter((user) => {
      return user.id !== id;
    });

    pocStore.dispatch('UPDATE_USERS', {
      users: updatedUsers
    });
  };

  console.log('CUSTOM STORE - TODO LIST ITEM');

  return (
    <li className={CLASS.userListItem}>
      {user.name}
      <button onClick={() => handleDeleteUser(user.id)}>delete</button>
      <PaintCounterComponent />
    </li>
  );
};

export default UserListItemComponet;
