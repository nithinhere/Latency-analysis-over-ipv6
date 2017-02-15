// LOAD HTTP MODULE
var http = require('http');

// SPECIFY HOSTNAME, PATH AND PORT NUMBER
var options = {
	host:'fd50:4abe:b885:3::2',
	path: '/' , 
	port:8081
};

// INSTANCE VARIABLE - INITIALIZE SUM TO ZERO
var sum = 0.0;

// CALLBACK FUNCTION IS PASSED TO ANOTHER FUNCTION AS PARAMETER
function_callback = function(response) {
	var string = '';			// INITIALIZE EMPTY STRING
	response.on('data', function (data) {	// GRAB THE DATA RIGHT OUT OF THE DATA BY LISTENING TO THE STREAMS data and end EVENTS			
	string+= data;				// APPEND DATA CHUNK TO THE EMPTY STRING	
	});
	response.on('end', function () {	// END TRIGGERS ON FULL DATA CONSUMPTION
		var end_Time = new Date(); 	// OBSERVE END TIME
		var totalTime = end_Time - start_Time; // CALCULATE TOTAL TIME FROM THE START AND END TIME
		console.log('Total time ' , totalTime);
		sum = sum + totalTime;			// SUM OF TOTAL TIME IN MILLISECONDS
		console.log(' Sum :', sum);
		var mean = sum / 100 ; 			// FIND OUT MEAN OF TOTAL TIME IN MILLISECONDS
		console.log(' Mean of totaltime in milliseconds ', mean);
		});
		}
for ( var i = 1; i <= 100 ; i++ ){

		// START TIMER
     		var start_Time = new Date();
		// INITIATE HTTP REQUEST
		http.request(options, function_callback).end();
		

}



