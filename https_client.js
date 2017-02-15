// LOAD HTTPS MODULE
var https = require('https');
var fs = require('fs');

// SPECIFY HOSTNAME, PORT NUMBER AND CERTIFICATE DETAILS
var options = {
		host:'fd50:4abe:b885:2::2', 	// IPV6 ADDRESS
	        path: '/',
		port:8443, 			// PORT NUMBER
		key: fs.readFileSync('ca.key'), // CERTIFICATE AUTHORITY KEY [RSA]
	  	cert:fs.readFileSync('ca.crt'), // CLIENT CERTIFICATE
		rejectUnauthorized: false	// DISABLE CHECKING CERTIFICATE
};

// INSTANCE VARIABLE - INITIALIZE SUM TO ZERO
var sum = 0.0;

// CALLBACK FUNCTION PASSED TO ANOTHER FUNCTION AS PARAMETER
function_callback = function(response) {
	    var string = '';				// INITIALIZE EMPTY STRING
	    response.on('data', function (data) {	// GRAB THE DATA RIGHT OUT OF THE DATA INTO THE STREAMS OF data and end EVENTS
	    string += data;				// APPEND DATA CHUNK TO THE EMPTY STRING
	    });
	    response.on('end', function () {		// END TRIGGERS ON FULL DATA CONSUMPTIO
	    
	    var end_Time = new Date(); 			// OBSERVE END TIME
	    var total_Time = end_Time - start_Time; 	// CALCULATE TOTAL TIME TAKEN FROM THE END AND START TIME	    
	    console.log('Total timetaken ', total_Time);
	    sum = sum + total_Time;			// SUM FO THE TOTAL TIME TAKEN IN MILLISECONDS
	    console.log(' sum : ', sum);
	    var mean = sum / 100; 			// CALCULATE MEAN FOR 100 RUNS
	    console.log(' Mean of total time in Milliseconds ', mean);
	
	    });
	    }
// RUN THE EXPERIMENT FOR 100 RUNS
for( var i = 1; i <= 100; i++){

	// START THE TIMER
	var start_Time = new Date();
	// INITIATE THE HTTP REQUEST
	https.request(options, function_callback).end();

}
