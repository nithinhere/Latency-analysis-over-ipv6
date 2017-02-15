import socket
  
UDP_IP = "::" # = private ipv6 address
UDP_PORT = 5005 #- port number to recieve data from

# Establish UDP socket
sock = socket.socket(socket.AF_INET6, # Internet
                                socket.SOCK_DGRAM) # UDP
# Bind the socket through the address and the port
sock.bind((UDP_IP, UDP_PORT))

# Recieve the message
while True:
    
    # Recieve the message from the client
    data, addr = sock.recvfrom(1024) # buffer size is 1024 bytes

    # Send the response to the client        
    if data:
        sent = sock.sendto(data, addr)
    # print the recieved message after the response being sent
    print "recieved message : ", data
