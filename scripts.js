$(document).ready(function(){

	var firstNumber = 0;
	var secondNumber = 0;
	var clearScreen = false;
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
		clearScreen = true;
	});

	$('#multiOperation').click(function(){

	});

	$('#equalOp').click(function(){
		secondNumber = parseFloat($('#screen').val());
		calculateResult();
	});

	// $('#cleanOperation').click(function(){
	// 	$('#screen').val('');
	// });

	// $('#btnDot').click(function(){
	// 	var currentVal = $('#screen').val();
	// 	$('#screen').val(currentVal + '.')
	// });

	//Calculates the resut based in the numbers on the screen
	function calculateResult() {
		var result = 0;
		switch(operation){
			case 'plus':
				result = firstNumber + secondNumber;
				$('#screen').val(result);			
			break;
		}
	}

	//Clears the calculator display
	function cleanDisplay() {
		$('#screen').val('');
		clearScreen = false;
	}

	//NUMBER EVENTS
	$('.calculatorButtonNumber').click(function(){
		var buttonSelected = $(this).find('span')[0].innerText;
		buttonSelected = parseInt(buttonSelected);

		if(isNaN(buttonSelected)) {

		}
		else {
			if(clearScreen) {
				cleanDisplay();
			}
			var currentVal = $('#screen').val();
			$('#screen').val(currentVal + buttonSelected);
		}
	});

	
	// $('#btnOne').click(function(){
	// 	var currentVal = $('#screen').val();
	// 	$('#screen').val(currentVal + '1')
	// });
});