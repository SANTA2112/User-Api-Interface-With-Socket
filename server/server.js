const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socket = require('socket.io')(server);

const { User } = require('./db');

app.use(require('cors')());
app.use(express.static(__dirname + '/static'));


server.listen(8081, () => console.log('Server started at http://localhost:8081'));

socket.on('connection', client => {
  console.log('Client connected');
  User.find({}).then(users => client.emit('receiveUsers', users));

  const emitAll = () => User.find({}).then(users => socket.sockets.emit('receiveUsers', users))

  client.on('addUser', user => {
    User.create(user).then(emitAll)
  })

  client.on('deleteUser', id => {
    User.remove({ _id: id }).then(emitAll)
  })

  client.on('updateUser', ({ id, user }) => {
    User.findOneAndUpdate({ _id: id }, user).then(emitAll)
  })
})
