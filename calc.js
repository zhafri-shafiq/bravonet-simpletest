var NUMBER2TEXT = {
    ones: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens: ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    sep: ['', ' thousand ', ' million ', ' billion ', ' trillion ', ' quadrillion ', ' quintillion ', ' sextillion ']
};

(function( ones, tens, sep ) {

    var input = document.getElementById( 'input' ),
        output = document.getElementById( 'output' );
    
    input.onkeyup = function() {
        var val = this.value,
            arr = [],
            str = '',
            i = 0;
        
        if ( val.length === 0 ) {
            output.textContent = 'Please type a number into the text-box.';
            return;  
        }
        
        val = parseInt( val, 10 );
        if ( isNaN( val ) ) {
            output.textContent = 'Invalid input.';
            return;   
        }
        
        while ( val ) {
            arr.push( val % 1000 );
            val = parseInt( val / 1000, 10 );   
        }
        
        while ( arr.length ) {
            str = (function( a ) {
                var x = Math.floor( a / 100 ),
                    y = Math.floor( a / 10 ) % 10,
                    z = a % 10;
                
                return ( x > 0 ? ones[x] + ' hundred ' : '' ) +                 
                       ( y >= 2 ? tens[y] + ' ' + ones[z] : ones[10*y + z] ); 
            })( arr.shift() ) + sep[i++] + str;                     
        }
        
        output.textContent = str;        
    };
    
})( NUMBER2TEXT.ones, NUMBER2TEXT.tens, NUMBER2TEXT.sep );


function calculateDistance() 
{
		var lat1 = parseFloat(document.getElementById('lat1').value);
		var long1 = parseFloat(document.getElementById('long1').value);
		var lat2 = parseFloat(document.getElementById('lat2').value);
		var long2 = parseFloat(document.getElementById('long2').value);

		// var point1;
		// var point2;
		// var distance;

		// point1 = Math.pow(xValue1 - xValue2, 2);
		// point2 = Math.pow(yValue1 - yValue2, 2);

		// distance = Math.sqrt(point1 + point2);

  //       var n = Math.pow(10, 2);
  //       distance = Math.round( (n * distance).toFixed(2) )  / n;

  
	    var R = 6378.137; // Radius of earth in KM
	    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
	    var dLon = long2 * Math.PI / 180 - long1 * Math.PI / 180;
	    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
	    Math.sin(dLon/2) * Math.sin(dLon/2);
	    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	    var d = R * c;
	    d = d*1000; // meters


        var n = Math.pow(10, 2);
        distance = Math.round( (n * d).toFixed(2) )  / n;


		document.getElementById('output2').innerHTML =
	    'The distance between ' + lat1 + ', ' + long1 + ' and ' + lat2 + ', ' + long2 + ' is ' + distance;
}

function resetdistance()
{
    var xValue1 = document.getElementById('lat1');
	var yValue1 = document.getElementById('long1');
	var xValue2 = document.getElementById('lat2');
	var yValue2 = document.getElementById('long2');
	var distance = document.getElementById('output2');

	xValue1.value = '';
	yValue1.value = '';
	xValue2.value = '';
	yValue2.value = '';
	distance.value = '';

}

function resetwording()
{
    var input = document.getElementById('input');

	input.value = '';

}