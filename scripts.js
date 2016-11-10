$(document).ready(function(){

	var firstNumber = 0;
	var secondNumber = 0;
	var operation = '';

	// OPERATION EVENTS
	$('#powOperation').click(function(){

	});

	$('#percentageOperation').click(function(){

	});

	$('#divOperation').click(function(){

	});

	$('#subOperation').click(function(){

	});

	$('#plusOperation').click(function(){
		operation = 'plus';
		firstNumber = parseFloat($('#screen').val());
	});

	$('#multiOperation').click(function(){

	});

	$('#equalOp').click(function(){
		secondNumber = parseFloat($('#screen').val());
		calculatesResult();
	});

	$('#cleanOperation').click(function(){
		$('#screen').val('');
	});

	$('#btnDot').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '.')
	});

	//Calculates the resut based in the numbers on the screen
	function calculatesResult() {
		var result = 0;
		switch(operation){
			case 'plus':
				result = firstNumber + secondNumber;
				$('#screen').val(result);			
			break;
		}
	}

	//NUMBER EVENTS
	$('#btnOne').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '1')
	});

	$('#btnTwo').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '2')
	});

	$('#btnThree').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '3')
	});

	$('#btnFour').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '4')
	});

	$('#btnFive').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '5')
	});

	$('#btnSix').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '6')
	});

	$('#btnSeven').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '7')
	});

	$('#btnEight').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '8')
	});

	$('#btnNine').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '9')
	});

	$('#btnZero').click(function(){
		var currentVal = $('#screen').val();
		$('#screen').val(currentVal + '0')
	});
});