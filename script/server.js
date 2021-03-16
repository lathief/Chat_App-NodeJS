const io = require('socket.io')(3000)

const users = {}

io.on('connection', socket => {
    // console.log('NEW USER') // MENGECEK NEW USER
    //socket.emit('chat-message', 'Hello World')
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', message =>{
        socket.broadcast.emit('chat-message', {message: message, name: users[socket.id]})
    })
    socket.on('disconnect',() =>{
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
        ///socket.broadcast.emit('user-connected', name)
    })
})