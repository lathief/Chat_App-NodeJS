const io = require('socket.io')(3000)

io.on('connection', socket => {
    socket.enit('chat-message', 'Hello World')
})