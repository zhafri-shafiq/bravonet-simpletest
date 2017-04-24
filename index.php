	
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
	<label>1. Numeric to words</label>
	<br>

	<input type="text" id="input">
	<input type="button" value="Reset" onclick="resetwording()">

	<p id="output"></p>
	<hr>

	<label>2. Distances</label>
	<br>
	<label>Point A</label>
	<br>
	<label>Latitude</label>
	<input type="number" id="lat1">
	<label>Longitude</label>
	<input type="number" id="long1">
	<br>
	<br>
	<label>Point B</label>
	<br>
	<label>Latitude</label>
	<input type="number" id="lat2">
	<label>Longitude</label>
	<input type="number" id="long2">	
	<br>
	<br>
	<input type="button" value="Calculate Distance" onclick="calculateDistance()">
	<input type="button" value="Reset" onclick="resetdistance()">
	<br>
	<p id="output2"></p>

<script type="text/javascript" src="calc.js"></script>
