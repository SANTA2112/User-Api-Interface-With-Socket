import io from 'socket.io-client';

export const socket = io('ws://localhost:8081');

export const deleteUser = id => socket.emit('deleteUser', id);
export const addUser = user => socket.emit('addUser', user);
export const updateUser = (id, user) => socket.emit('updateUser', { id, user });
