import socket 
from datetime import datetime #Timer to observe the time
import time

# instance variables
n = 100                 # Total no of Runs
sum = 0.0               # initialize sum to 0.0

for i in range(n):
    s = socket.socket(socket.AF_INET6,socket.SOCK_STREAM,0) # Set up a TCP/IP packet

    #start the time
    start_Time = time.time()

    # Connection to the server with specified port 5556 
    s.connect(('fd50:4abe:b885:3::2',5556,0,0))

    # send request to the server 
    s.send("Hey ya ! How are you ?")

    # Wait for the response, ultimately
    # receive response 
    resp = s.recv(1024)
    
    # Close the connection
    s.close()

    #end timer 
    end_Time = time.time()

    #Calculate latency
    total_Time=end_Time - start_Time

    #Calculate entire time for 100 request/response
    sum = sum + total_Time
    
    print total_Time

#Observe mean from the 100 runs
mean = sum / n

print "sum of total time taken for 100 transactions in seconds: ", sum

print " Mean time for 100 request/ response interactions in seconds: ", mean 




