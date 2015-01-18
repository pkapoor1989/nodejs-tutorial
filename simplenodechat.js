var net = require('net');

var count = 0;
var users = {};
net.createServer(function(conn) {
    var nickname = '';
    conn.write('Welcome to My chat \n Please Enter your name');
    count++;
    
    conn.on('data',function(data) {
        if (!nickname) {
            if (users[data]) {
                conn.write('Username exists Please type again');
            } else {
                nickname = data;
                users[data] = conn;
                
                for (var i in users) {
                    if (i != nickname) {
                        conn.write(nickname + ' has joined the room');
                    }
                }
            }
        } else {
            for (var i in users) {
                if (i != nickname) {
                    conn.write(nickname+': says '+data);
                }
            }
        }
        
    });
    
    conn.on('end',function() {
        count--;
        delete users[nickname];
    });
    
    conn.setEncoding('utf8');
}).listen(3000,function() {
    console.log('Listening At 3000');
});