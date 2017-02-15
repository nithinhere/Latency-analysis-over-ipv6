import socket

# Establish the TCP/IP socket
s = socket.socket(socket.AF_INET6,socket.SOCK_STREAM,0)

# Bind to TCP port No. 5556 ... 
s.bind(("",5556))

# Sets up and start the listener 
s.listen(5)

while True:

    # Waiting until connection arrives
    connect,address = s.accept()
     
    # Receive up to 1024 bytes
    resp = (connect.recv(1024)).strip()
    
    # Send message 
    connect.send("Hey Nithin, I am Fine! \n")

    connect.close()

    print resp
