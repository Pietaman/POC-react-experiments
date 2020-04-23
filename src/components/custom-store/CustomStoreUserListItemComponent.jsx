import React from 'react';

import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

import pocStore from './customStore';

const CLASS = {
  userListItem: 'user-list__item'
};

const UserListItemComponet = ({ user }) => {
  const handleDeleteUser = (id) => {
    const { users, list } = pocStore.getStore();

    const updatedUsers = users.filter((user) => {
      return user.id !== id;
    });

    const updatedList = list.filter((item) => {
      return item.id !== id;
    });

    pocStore.dispatch('UPDATE_USERS', {
      users: updatedUsers
    });

    pocStore.dispatch('UPDATE_TODOS', {
      list: updatedList
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
