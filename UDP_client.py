import socket
from datetime import datetime
import time

UDP_IP = 'fd50:4abe:b885:3::2'  # ipv6 private address
UDP_PORT = 5005 #Port number to bind data
MESSAGE = "Hello, World!" # Message sent from client
print "Socket Created"
print "UDP target IP:", UDP_IP
print "UDP target port:", UDP_PORT
print "Message is:", MESSAGE

#instance variables
n = 100                 # 100 no of runs
time_in_List = list()   # List to append time values
sum = 0.0               # initialize sum to 0.0

for i in range(n):      # Run the experiment for 100 runs

    # Send the data through Socket
    sock = socket.socket(socket.AF_INET6, # Internet
                            socket.SOCK_DGRAM) # UDP
    # Start the timer
    start_time = time.time()
    
    # Send the message using sendto()
    sock.sendto(MESSAGE, (UDP_IP, UDP_PORT))
    
    # recieve the response
    data, server = sock.recvfrom(1024)
    
    # Note the end time
    end_time = time.time()
 
    # Perform Latency Calculation
    total_time = end_time - start_time
    
    print total_time
    
    # Calculate sum of 100 totaltimes
    sum = sum + total_time

# Calculate mean for sum of 100 totaltimes
mean = sum / n

print " sum of 100 runs in seconds : " , sum

print " Mean of totaltime in seconds : ", mean



