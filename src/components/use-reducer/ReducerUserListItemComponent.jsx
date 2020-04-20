import React from 'react';
import PaintCounterComponent from '../paint-counter/PaintCounterComponent';

const CLASS = {
  userListItem: 'user-list__item'
};

const UserListItemComponet = ({ user, dispatch }) => {
  const handleDeleteUser = (id) => {
    dispatch({ type: 'DELETE_USER', payload: { id } });
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
